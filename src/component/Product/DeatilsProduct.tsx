import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/redux/api/baseApi';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { BsCartPlus } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/api/slice/cartSlice';
import { toast } from 'sonner';

const DetailsProduct = () => {
  const { id } = useParams();
  const { data, isLoading ,} = useGetProductQuery(id);
  const dispatch = useDispatch();
  const product = data?.product;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (product) {
      setQuantity(product.quantity);
    }
  }, [product]);

  if (isLoading) return <p>Loading...</p>;

  const { image, title, brand, price, rating, description } = product || {};

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart(product));
      toast.success(`Item added to your cart!`);
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    } else {
      toast.error(`Sorry, ${title} is out of stock!`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md mt-12 flex flex-col lg:flex-row lg:space-x-8">
      {/* Product Image */}
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover object-center rounded-lg shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="lg:w-1/2 w-full">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-3 text-yellow-600">{title}</h1>
          <p className="text-lg font-medium text-gray-700 mb-2">{brand}</p>
          <p className="text-md text-gray-600 mb-3">
            {quantity > 0 ? `Available: ${quantity}` : 'Out of Stock'}
          </p>
          <p className="text-3xl font-semibold mb-4 text-yellow-600">${price}</p>

          {/* Rating Section */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CiStar
                key={index}
                className={`h-6 w-6 ${
                  index < rating ? 'text-yellow-600' : 'text-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 text-base leading-relaxed">{description}</p>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={quantity <= 0}
            className={`flex items-center justify-center w-full py-3 bg-yellow-500 text-white font-semibold rounded-md ${
              quantity <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600'
            }`}
          >
            <BsCartPlus className="mr-2" />
            {quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
