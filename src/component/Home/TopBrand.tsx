import SectionHeader from "@/utils/SectionHeader";

const TopBrand = () => {
  const brands = [
    {
      id: 1,
      name: "Gucci",
      logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190900/Gucci.png",
      link: "/products/brand-one",
    },
    {
      id: 2,
      name: "Louis Vuitton",
      logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png",
      link: "/products/brand-two",
    },
    {
      id: 3,
      name: "Chanel",
      logo: "https://www.designrush.com/uploads/users/customer-2/image_1505931862_e2896044118462ae451d87076f16ce6d.jpeg",
      link: "/products/brand-three",
    },
    {
      id: 4,
      name: "Playboy",
      logo: "https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Brand-Logos-Playboy.jpg",
      link: "/products/brand-four",
    },
  ];

  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className="py-16 bg-gray-100 text-gray-800">
      {/* Section Header */}
      <SectionHeader
        headTag="Top Brands"
        underTag="Discover the luxury and elegance of our top brands"
  
      />

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Brand Logo */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4"
            />
            {/* Brand Name */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {brand.name}
            </h3>
            {/* Brand Link */}
            <button
              
              className="inline-block pointer px-4 py-2 border border-yellow-400 rounded-full text-gray-700 hover:bg-yellow-500  hover:text-white transition-colors duration-200"
            >
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrand;
