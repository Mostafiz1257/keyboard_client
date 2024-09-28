import { useEffect, useState } from "react";

const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      image:
        "https://wallpaperboat.com/wp-content/uploads/2020/11/10/59839/keyboard-01.jpg",
      title: "Feel the Precision of Mechanical Keyboards",
      description:
        "Crafted for perfection, designed for professionals and gamers alike.",
    },
    {
      id: 2,
      image:
        "https://wallpaperboat.com/wp-content/uploads/2020/11/10/59839/keyboard-01.jpg",
      title: "Unmatched Performance, Unstoppable Experience",
      description:
        "Unlock the ultimate power with premium key switches and customization options.",
    },
    {
      id: 3,
      image:
        "https://wallpaperboat.com/wp-content/uploads/2020/11/10/59839/keyboard-01.jpg",
      title: "Aesthetic Meets Functionality",
      description:
        "Explore our wide range of mechanical keyboards that blend style with substance.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 6000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <div  className="relative w-full h-[600px]">
      <div className="overflow-hidden shadow-lg">
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {sliderData.map((slider) => (
            <div key={slider.id} className="min-w-full relative">
              <div className="bg-transparent h-[600px] relative">
                <img
                  src={slider?.image}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  alt="Keyboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-center items-center text-center px-4">
                  <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
                    {slider.title}
                  </h1>
                  <p data-aos="fade-up"
     data-aos-duration="3000" className="text-gray-200 text-lg mb-6 drop-shadow-md max-w-2xl">
                    {slider.description}
                  </p>
                  <button 
   className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-90 transition-opacity duration-300"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-90 transition-opacity duration-300"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default HeroSection;
