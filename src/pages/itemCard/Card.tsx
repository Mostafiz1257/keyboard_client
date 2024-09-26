// src/components/Card.tsx

import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/redux/api/slice/cartSlice';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const Card = () => {
  const cart = useSelector(state => state?.cart?.items);
  const dispatch = useDispatch();
console.log("card",cart);
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className='text-3xl font-bold items-center text-yellow-400'>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Quantity controls */}
                <button
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item._id))}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>

                {/* Remove item button */}
                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Pricing Details */}
          <div className="mt-4 text-right">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/checkout">
              <Button className="mt-4" disabled={cart.length === 0}>
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
