import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
      {/* Success Icon */}
      <FaCheckCircle className="text-green-600 text-6xl mb-4" />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-600 mb-2">Thank You for Your Order!</h1>
      
      {/* Subtext */}
      <p className="text-gray-700 text-lg mb-6">
        Your order has been successfully placed. We appreciate your business!
      </p>

      {/* Go to Homepage Button */}
      <Link to="/" className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-green-600 hover:text-white transition duration-300">
        Go to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
