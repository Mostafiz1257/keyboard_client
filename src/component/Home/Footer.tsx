
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="text-gray-400">
              We are passionate about delivering high-quality mechanical keyboards to enhance your typing experience. Discover our premium collection and find the perfect keyboard for you.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400 hover:underline transition-colors">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400 hover:underline transition-colors">Products</a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-yellow-400 hover:underline transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-yellow-400 hover:underline transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-gray-400">Email: support@mechanicalkeyboardshop.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 text-center mt-12 border-t border-yellow-400">
        <p>&copy; {new Date().getFullYear()} Mechanical Keyboard Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
