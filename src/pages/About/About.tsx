import { motion } from 'framer-motion';
import { FaUser, FaHistory, FaBullhorn } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <section className="mb-16">
          <motion.div
            className="bg-white p-10 rounded-lg shadow-md mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At our company, our mission is to deliver high-quality products that exceed customer expectations. We are committed to innovation, excellence, and sustainability in everything we do.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaUser className="text-yellow-500 h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meet the Team</h3>
              <p className="leading-relaxed">
                Our team is composed of talented and dedicated individuals who work together to bring you the best products and services. We value collaboration and creativity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaHistory className="text-yellow-500 h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="leading-relaxed">
                From humble beginnings to industry leaders, our story is one of passion and growth. We’ve evolved over the years, always keeping our core values at the heart of our journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaBullhorn className="text-yellow-500 h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                We aim to be at the forefront of innovation, driving change and setting new standards in our industry. Our vision is to create a lasting impact and inspire others.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section>
          <motion.div
            className="bg-white p-10 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded with a vision to revolutionize the industry, our company has grown from a small startup to a recognized leader. Our journey is filled with milestones that reflect our commitment to excellence and innovation.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
