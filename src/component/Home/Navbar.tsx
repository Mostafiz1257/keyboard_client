import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const cartItems = 3; // Replace this with the actual number of items in the cart from your state or props

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'text-white bg-blue-500'
      : 'text-gray-900 hover:bg-gray-200 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-900">MyWebsite</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getNavLinkClass('/')}`}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getNavLinkClass('/products')}`}
                >
                  Products
                </Link>
                <Link
                  to="/about-us"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getNavLinkClass('/about-us')}`}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getNavLinkClass('/contact-us')}`}
                >
                  Contact Us
                </Link>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getNavLinkClass('/dashboard')}`}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/order" className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-900 hover:text-gray-700" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${getNavLinkClass('/')}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium ${getNavLinkClass('/products')}`}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/about-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${getNavLinkClass('/about-us')}`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${getNavLinkClass('/contact-us')}`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${getNavLinkClass('/dashboard')}`}
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
