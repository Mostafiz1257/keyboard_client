import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// Sample products data
const products = [
  {
    id: 1,
    name: "Mechanical Keyboard Pro",
    image: "https://via.placeholder.com/300x200",
    price: "$99.99",
    description: "High-performance mechanical keyboard with customizable RGB lighting.",
  },
  {
    id: 2,
    name: "Gaming Mouse Elite",
    image: "https://via.placeholder.com/300x200",
    price: "$59.99",
    description: "Precision gaming mouse with adjustable DPI and ergonomic design.",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    image: "https://via.placeholder.com/300x200",
    price: "$149.99",
    description: "Comfortable ergonomic chair designed for long gaming sessions.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-gray-800 mb-4">{product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                >
                  <FaShoppingCart className="mr-2" /> View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
