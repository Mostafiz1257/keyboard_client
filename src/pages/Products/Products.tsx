import { useState } from 'react';
import { FaSearch, FaDollarSign, FaTimes, FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import ProductCard from "@/component/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import Loading from "@/component/Loading";
import { Product } from "@/types";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products: Product[] = data?.products || []; // Ensure products is always an array

  // State for search term, price range, sort option, and pagination
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'lowToHigh' | 'highToLow'>('lowToHigh'); // Specify sort options
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Number of products per page

  // Filter products based on search term and price range
  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = (!minPrice || product.price >= Number(minPrice)) && (!maxPrice || product.price <= Number(maxPrice));
    return (matchesName || matchesBrand) && matchesPrice;
  });

  // Sort products based on selected order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.price - b.price;
    return b.price - a.price;
  });

  // Get current products for the page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setSortOrder('lowToHigh');
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container mx-auto md:px-4 py-12">
      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name or brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <FaDollarSign className="text-gray-400" />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center mb-4 sm:mb-0">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'lowToHigh' | 'highToLow')} // Cast value to expected type
            className="border rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
          {sortOrder === 'lowToHigh' ? <FaSortAmountUp className="text-gray-400" /> : <FaSortAmountDown className="text-gray-400" />}
        </div>

        <button
          onClick={clearFilters}
          className="bg-red-500 text-white rounded p-2 flex items-center hover:bg-red-600 transition-colors"
        >
          <FaTimes className="mr-1" /> Clear Filters
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
            {currentProducts.length > 0 ? (
              currentProducts.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p> // Display message when no products match
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-l ${currentPage === 1 ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              Prev
            </button>

            <span className="px-4 py-2 flex items-center">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-r ${currentPage === totalPages ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
