import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Info Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaMapMarkerAlt className="text-yellow-500 h-10 w-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Our Location</h3>
              <p className="text-center">
                123 Business St, Suite 456<br />
                Your City, State, 12345
              </p>
            </motion.div>
            
            {/* Phone */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaPhone className="text-yellow-500 h-10 w-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Phone</h3>
              <p className="text-center">+1 (123) 456-7890</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaEnvelope className="text-yellow-500 h-10 w-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Email</h3>
              <p className="text-center">contact@yourcompany.com</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">Send Us a Message</h2>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {successMessage && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                {successMessage}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 transition duration-300 ${isSubmitting ? 'cursor-wait' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
