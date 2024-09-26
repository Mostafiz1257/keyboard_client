import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/redux/api/baseApi';
import { useDispatch } from 'react-redux';

import { CiStar } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/api/slice/cartSlice';

const DetailsProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const dispatch = useDispatch();
  const product = data?.product;
  const [availableQuantity, setAvailableQuantity] = useState(1);

  if (isLoading) return <p>Loading...</p>;

  const { image, title, brand, quantity, price, rating, description } = product || {};

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart(product));
console.log(product);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-60 object-cover object-center rounded-t-lg" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2">{brand}</p>
        <p className="text-gray-600 mb-2">Available: {quantity}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">${price}</p>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CiStar key={index} className={`h-5 w-5 text-yellow-500 ${index < rating ? 'fill-current' : 'fill-transparent'}`} />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center mb-4">
          <input
            type="number"
            min="1"
            max={quantity}
            value={availableQuantity}
            onChange={(e) => setAvailableQuantity(parseInt(e.target.value))}
            className="border rounded-md p-2 w-20 mr-4"
          />
          <Button onClick={handleAddToCart} disabled={quantity <= 0}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
