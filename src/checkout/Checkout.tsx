import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { useDecreaseProductQuantityMutation } from '@/redux/api/baseApi';
import { loadStripe } from "@stripe/stripe-js";
import { toast } from 'sonner';
import { RootState } from '@/redux/store';

const Checkout = () => {
  const cart = useSelector((state:RootState) => state.cart.items);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [decreaseProductQuantity] = useDecreaseProductQuantityMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return userDetails.name && userDetails.email && userDetails.phone && userDetails.address; // Validate form
  };

  const handlePlaceOrder = async () => {
    if (!isFormValid()) {
      toast.error("Please fill out all fields!"); // Alert if form is incomplete
      return;
    }

    setLoading(true); // Start loading state

    if (paymentMethod === 'cod') {
      try {
        for (const item of cart) {
          await decreaseProductQuantity({ id: item._id, quantity: item.quantity }).unwrap();
        }
        dispatch({ type: 'cart/clearCart' });
        navigate('/success');
        toast.success('Your order confirmed')
      } catch (error) {
        console.error('Failed to decrease product quantity: ', error);
        toast.error("Failed to process order.");
      } finally {
        setLoading(false); // End loading state
      }
    } else if (paymentMethod === 'stripe') {
      try {
        const stripe = await loadStripe("pk_test_51NFUAjEsme57IV63aYt8tpTvOke8ZxsEw3eN2XiuTYopgXp8kRQ3c3thJoWrzG01vFDyq0vqJ9C4cpFRAl2vlfZY006wDbD92L");
        const body = { products: cart };
        const headers = { "content-type": "application/json" };

        const response = await fetch("https://mechanicalkeyboardserverside.vercel.app/api/create-checkout-session", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        });

        for (const item of cart) {
          await decreaseProductQuantity({ id: item._id, quantity: item.quantity }).unwrap();
        }
        dispatch({ type: 'cart/clearCart' });

        if (!response.ok) {
          throw new Error("Failed to create checkout session");
        }

        const session = await response.json();
        const result = await stripe?.redirectToCheckout({ sessionId: session?.id });
        toast.success('/Your order confirmed')
        if (result?.error) {
          throw new Error(result.error.message || "Failed to redirect to checkout");
        }
      } catch (error) {
        console.error("Stripe payment error:", error);
        toast.error("Failed to process payment");
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="mb-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={userDetails.email}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full mb-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={userDetails.phone}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full mb-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          required
          value={userDetails.address}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Select Payment Method:</h3>
        <label className="block mb-2">
          <input
            type="radio"
            name="paymentMethod"
            required
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Cash on Delivery</span>
        </label>
        <label className="block">
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === 'stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Stripe</span>
        </label>
      </div>

      <Button className='rounded-full' onClick={handlePlaceOrder} disabled={loading}> {/* Disable button if loading */}
        {loading ? 'Processing...' : 'Place Order'}
      </Button>
    </div>
  );
};

export default Checkout;
