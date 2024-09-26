import { useSelector } from 'react-redux';
import { FaShoppingCart, FaBars, FaTimes,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const uniqueItemCount = cartItems.length;

  return (
    <nav className="bg-black text-white fixed z-50 w-full ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-3">
          {/* <FaKeyboard className="text-yellow-500 text-4xl" /> */}
          <span className="text-4xl font-bold text-yellow-500">TypeCrafters</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-500 text-lg font-medium">Home</Link>
          <Link to="/products" className="hover:text-yellow-500 text-lg font-medium">Products</Link>
          <Link to="/about-us" className="hover:text-yellow-500 text-lg font-medium">About Us</Link>
          <Link to="/contact-us" className="hover:text-yellow-500 text-lg font-medium">Contact Us</Link>
          <Link to="/dashboard" className="hover:text-yellow-500 text-lg font-medium">Dashboard</Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6 text-yellow-500" />
            {uniqueItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                {uniqueItemCount}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black py-4">
          <Link to="/" className="block text-lg font-medium text-white hover:text-yellow-500 py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/products" className="block text-lg font-medium text-white hover:text-yellow-500 py-2" onClick={toggleMenu}>Products</Link>
          <Link to="/about-us" className="block text-lg font-medium text-white hover:text-yellow-500 py-2" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact-us" className="block text-lg font-medium text-white hover:text-yellow-500 py-2" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/dashboard" className="block text-lg font-medium text-white hover:text-yellow-500 py-2" onClick={toggleMenu}>Dashboard</Link>

          <Link to="/cart" className="relative flex items-center justify-center py-4">
            <FaShoppingCart className="h-6 w-6 text-yellow-500" />
            {uniqueItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                {uniqueItemCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
