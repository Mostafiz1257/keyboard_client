import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "@/utils/SectionHeader";

// Define the type for a single review
interface Review {
  image: string;
  customerImage: string;
  customerName: string;
  keyboardExperience: string;
  reviewText: string;
  rating: number;
}

const ReviewCarousel: React.FC = () => {
  const reviews: Review[] = [
    {
      image: "https://images-platform.99static.com//jBKTlrLR96nGVFVxty13IKgf8p8=/131x22:832x723/fit-in/500x500/99designs-contests-attachments/124/124235/attachment_124235683",
      customerImage: "https://images.squarespace-cdn.com/content/656f4e4dababbd7c042c4946/1706750781148-ZC9BZUC4HG8ETZ9AEU63/how-to-stop-being-a-people-pleaser-1_1.jpg?content-type=image%2Fjpeg",
      customerName: "John Doe",
      keyboardExperience: "Excellent Keyboard",
      reviewText: "This mechanical keyboard exceeded my expectations. The build quality and key feel are top-notch.",
      rating: 5,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp958yja8mLX6xXFGGCX1Q8OraQhg9oT8Pw&s",
      customerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jLhDQjJ4Hu-tMCFbGDKO_-A2ozkHPheIdQ&s",
      customerName: "Jane Smith",
      keyboardExperience: "Amazing Typing Experience",
      reviewText: "Typing on this keyboard is a dream. The tactile feedback and overall design are superb.",
      rating: 4.5,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Sd8K_bUZQ63Kg2F55WhjNE6-h2PjtuFohg&s",
      customerImage: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf//960x0.jpg?format=jpg&width=960",
      customerName: "Bob Johnson",
      keyboardExperience: "Great Value for Money",
      reviewText: "For the price, this keyboard offers exceptional value. Highly recommend to anyone looking for a quality mechanical keyboard.",
      rating: 4,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcPixSK8z1Jq_IdufR5w93tQcKgSGoXIYcA&s",
      customerImage: "https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-970974446.jpg.webp?itok=CRjsK8ZA",
      customerName: "Alice Brown",
      keyboardExperience: "Fantastic Build Quality",
      reviewText: "The build quality of this keyboard is fantastic. The keys are responsive and it's a pleasure to type on.",
      rating: 4.8,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      if (starValue <= rating) {
        return <FaStar key={index} className="text-yellow-400 h-5 w-5" />;
      } else if (starValue - rating < 1) {
        return <FaStarHalfAlt key={index} className="text-yellow-400 h-5 w-5" />;
      } else {
        return <FaStar key={index} className="text-gray-300 h-5 w-5" />;
      }
    });
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-white text-gray-800">
      <SectionHeader
        headTag="What Our Clients Say"
        underTag="Their reviews make us more reliable"
      />
      <Slider {...settings} className="max-w-6xl mx-auto px-8">
        {reviews.map((review, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mx-4 text-center transition-transform duration-300 hover:scale-105"
            style={{ width: '350px' }} // Adjust the width as needed
          >
            <img
              src={review.image}
              alt={review.keyboardExperience}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col items-center">
              <img
                src={review.customerImage}
                alt={review.customerName}
                className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-400 shadow-md"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{review.customerName}</h3>
              <p className="text-sm text-gray-600 mb-2 italic">{review.keyboardExperience}</p>
              <p className="text-sm text-gray-600 mb-4">{review.reviewText}</p>
              <div className="flex justify-center mb-4">{renderStars(review.rating)}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
