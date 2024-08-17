import React, { useState } from "react";
import ProductCard from "@/component/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { data, isLoading } = useGetAllProductsQuery({
    searchTerm,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    sortBy,
  });

  const products = data?.result;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Search and Filter Products</h2>
        <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-4 space-y-4 lg:space-y-0">
          <input
            type="text"
            placeholder="Search by name or brand"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full lg:w-auto p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full lg:w-auto p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full lg:w-auto p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full lg:w-auto p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
          <button
            onClick={handleClearFilters}
            className="w-full lg:w-auto p-3 border border-gray-300 rounded bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Clear Filters
          </button>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-6 gap-3 mt-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
