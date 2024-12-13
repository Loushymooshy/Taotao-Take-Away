import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cartItems, incrementItem, decrementItem } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (paymentMethod === "Online") {
      navigate("/payment");
    } else if (paymentMethod === "On Site") {
      navigate("/confirmation");
    }
  };

  return (
    <main className="w-1/2 mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
        CART
      </h1>

      <div className="bg-pandaWhite p-6 rounded-lg drop-shadow flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">YOUR ORDERS</h1>

        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg text-gray-800">
                  ${item.price * item.quantity}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => incrementItem(item.id)}
                >
                  +
                </Button>
              </div>
            </li>
          ))}
        </ul>

        {/* Totalpris */}
        <div className="mt-6 pt-4 border-t border-pandaBlack">
          <h3 className="text-lg font-bold text-right text-gray-800">
            TOTAL PRICE: ${totalPrice}
          </h3>
        </div>

        {/* Betalningsalternativ */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
            PAYMENT METHODS
          </h2>
          <div className="flex justify-center space-x-4 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="Online"
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="text-gray-700 font-bold text-ml">ONLINE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="On Site"
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="text-gray-700 font-bold text-ml">ON SITE</span>
            </label>
          </div>
        </div>

        {/* Kommentarer */}
        <div className="mt-4">
          <label className="block text-base font-medium text-gray-700 mb-1">
            Your message to the chef!
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Type your message here..."
          />
        </div>

        {/* Checkout-knapp */}
        <button
          className="w-full hover:bg-red-800 bg-themeRed text-pandaWhite rounded-md mt-4 h-12"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </main>
  );
};

export default Cart;
