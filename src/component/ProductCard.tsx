import { Link } from 'react-router-dom';
import { FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Product } from '@/types'; 

interface ProductCardProps {
  product: Product; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { _id, image, name, brand, price, rating } = product;

  return (
    <div className="relative group w-full sm:w-[300px] h-[420px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-[250px] object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between h-[170px]">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

        {/* Brand and Price */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{brand}</span>
          <span className="text-xl font-bold text-indigo-600">${price}</span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {/* See Details Button */}
          <Link
            to={`/products/${_id}`}
            className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
          >
            <FaEye className="mr-1" /> View Details
          </Link>

          {/* Add to Cart Button */}
          <button className="px-3 py-1 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors flex items-center">
            <FaShoppingCart className="mr-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
