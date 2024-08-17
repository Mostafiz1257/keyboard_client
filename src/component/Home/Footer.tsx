const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              We are passionate about mechanical keyboards and aim to provide the best selection of products for enthusiasts. Explore our website to find the perfect keyboard for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">123 Mechanical Keyboard St.</p>
            <p className="text-gray-600">Keyboard City, KB 12345</p>
            <p className="text-gray-600">Email: info@keyboardshop.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-600">&copy; 2024 Mechanical Keyboard Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
