import SectionHeader from '@/utils/SectionHeader';
import { FaTachometerAlt, FaShieldAlt, FaUsers } from 'react-icons/fa';

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaTachometerAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "Speed and Efficiency",
      description: "Our solutions ensure maximum speed and efficiency, giving you the best performance with minimal effort.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "Top-Notch Security",
      description: "We prioritize security to protect your data and ensure a safe experience with advanced security features.",
    },
    {
      icon: <FaUsers className="text-yellow-400 text-5xl mb-4" />,
      title: "Customer Support",
      description: "Our dedicated support team is available 24/7 to assist you with any questions or issues you might have.",
    },
  ];

  return (
    <section data-aos="fade-up"
    data-aos-duration="2000" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          headTag="Why Choose Us"
          underTag="Discover the benefits of partnering with us"
        />

        {/* Reason Cards */}
        <div className="flex flex-wrap justify-center -mx-4">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white hover:bg-gray-100 transition transform hover:-translate-y-2 duration-300 rounded-lg shadow-lg p-6 text-center">
                {/* Icon */}
                <div className="mb-4 ">
                  {reason.icon}
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
