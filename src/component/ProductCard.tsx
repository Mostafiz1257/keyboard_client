import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const { _id, image, title, brand, quantity, price, rating } = product;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{brand}</p>
        <p className="text-gray-600 mb-2">Available: {quantity}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">${price}</p>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CiStar key={index} className={`h-5 w-5 text-yellow-500 ${index < rating ? 'fill-current' : 'fill-transparent'}`} />
          ))}
        </div>
        <div className="flex justify-between">
          <Link to={`/products/${_id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
