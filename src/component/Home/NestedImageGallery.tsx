
import SectionHeader from '@/utils/SectionHeader';

const NestedImageGallery = () => {
  const images = [
    "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/bltc3a2756def720e31/64f17db97de67f2f2c00e543/keyboard_Jiri_Hera_Alamy.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
    "https://www.yankodesign.com/images/design_news/2023/12/ai-assisted-keyboard-streamlines-workflow-for-it-professionals-and-content-creators/SPARROW-AI-Keyboard-12.jpg",
    "https://divinikey.com/cdn/shop/products/gb-mw-evil-ai-keyboard-accessories-311606.webp?v=1695899508&width=1200",
    "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/bltfc39223844d0c9f4/6596ebbcd5ae6d040a4769c6/News_Image_-_2024-01-04T113232.408.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGIJW_bn_Z2VBz8lLryhTicezuWF0jiEhCA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhUj-cZWrtu52efG6Cj0kzWyk-Rqhi2HWeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14cxXbx9O7had6LLOrLvpFhFQ6LoC1C_DzQ&s",
  ];

  // Define an array of height classes for more variety
  const heightClasses = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80'];

  return (
    <div className="py-16 bg-gray-100">
      <SectionHeader
        headTag="Top Brands"
        underTag="Discover the luxury and elegance of our top brands"
      
       
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <div key={index} className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${heightClasses[index % heightClasses.length]}`}>
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedImageGallery;
