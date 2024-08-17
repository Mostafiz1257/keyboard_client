import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import img1 from '../../assets/img3.jpg';
import img2 from '../../assets/img4.jpg';
import img3 from '../../assets/img5.jpg';
import img4 from '../../assets/img5.jpg';

import customer1 from '../../assets/img3.jpg';
import customer2 from '../../assets/img4.jpg';
import customer3 from '../../assets/img5.jpg';
import customer4 from '../../assets/img5.jpg';

// import customer1 from '../../assets/customer3.jpg';
// import customer2 from '../../assets/customer2.jpg';
// import customer3 from '../../assets/customer3.jpg';
// import customer4 from '../../assets/customer4.jpg';

const Review = () => {
    const reviews = [
      {
        image: img1,
        customerImage: customer1,
        customerName: "John Doe",
        keyboardExperience: "Excellent Keyboard",
        reviewText: "This mechanical keyboard exceeded my expectations. The build quality and key feel are top-notch.",
        rating: 5
      },
      {
        image: img2,
        customerImage: customer2,
        customerName: "Jane Smith",
        keyboardExperience: "Amazing Typing Experience",
        reviewText: "Typing on this keyboard is a dream. The tactile feedback and overall design are superb.",
        rating: 4.5
      },
      {
        image: img3,
        customerImage: customer3,
        customerName: "Bob Johnson",
        keyboardExperience: "Great Value for Money",
        reviewText: "For the price, this keyboard offers exceptional value. Highly recommend to anyone looking for a quality mechanical keyboard.",
        rating: 4
      },
      {
        image: img4,
        customerImage: customer4,
        customerName: "Alice Brown",
        keyboardExperience: "Fantastic Build Quality",
        reviewText: "The build quality of this keyboard is fantastic. The keys are responsive and it's a pleasure to type on.",
        rating: 4.8
      }
    ];
  
    return (
      <Carousel>
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img src={review.image} alt={`Review Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4 text-center flex-grow">
                  <img src={review.customerImage} alt={review.customerName} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{review.keyboardExperience}</h3>
                  <p className="mt-2 text-sm">{review.reviewText}</p>
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-medium">{review.customerName}</span>
                  <div className="mt-1 flex justify-center">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${i < Math.round(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.856L19.335 24 12 20.01 4.665 24 6 15.279 0 9.423l8.332-1.268z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  
  export default Review;