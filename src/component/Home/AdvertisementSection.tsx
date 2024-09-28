import { Link } from 'react-router-dom';

const AdvertisementSection = () => {
  return (
    <section data-aos="fade-up"
    data-aos-duration="2000" className="relative py-16 bg-gray-900 text-yellow-400">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src=  "https://www.yankodesign.com/images/design_news/2023/12/ai-assisted-keyboard-streamlines-workflow-for-it-professionals-and-content-creators/SPARROW-AI-Keyboard-12.jpg"
          className="w-full h-full object-cover opacity-40" // Slightly reduced opacity for a more subtle background
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Advertisement Text */}
        <div className="lg:w-1/2 text-left space-y-5">
          <h2 className="text-4xl font-bold text-white">
            Grab Exclusive Deals!
          </h2>
          <p className="text-lg text-yellow-300 font-light leading-relaxed">
            Upgrade your typing experience with our premium mechanical keyboards. Enjoy limited-time offers on our top products.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Image with Text Overlay */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images7.alphacoders.com/693/thumb-1920-693172.jpg"
              alt="Top Keyboards"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 p-6">
              <div className="text-center text-yellow-400">
                <h3 className="text-3xl font-semibold mb-2">
                  Limited Time Offer!
                </h3>
                <p className="text-lg mb-4">
                  Get up to 30% off on select mechanical keyboards.
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition duration-300"
                >
                  Shop the Deal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementSection;
