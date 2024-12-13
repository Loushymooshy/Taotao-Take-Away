import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = (event: React.FormEvent) => {
    event.preventDefault();

    // Create a new order from cart items
    const newOrder = {
      id: Date.now(),
      restaurant: "Your Restaurant",
      date: new Date().toISOString().split("T")[0],
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
      })),
      total: totalPrice,
    };

    // Store the order details in local storage
    localStorage.setItem("order", JSON.stringify(newOrder));

    // Clear the cart items
    clearCart();

    // Navigate to the confirmation page
    navigate("/confirmation");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <main className="w-1/2 mx-auto">
        <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
          PAYMENT
        </h1>
        <div className="flex flex-row gap-60">
          <section>
            <h2>YOUR ORDERS</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="py-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <h2>TOTAL: ${totalPrice.toFixed(2)}</h2>
          </section>
          <form
            className="drop-shadow bg-pandaWhite text-pandaBlack flex flex-col p-6 w-70 rounded-md"
            onSubmit={handlePayment}
          >
            <label className="mt-2 font-bold" htmlFor="card-owner">
              CARD OWNER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="card-owner"
              name="card-owner"
            />
            <label className="mt-2 font-bold" htmlFor="card-number">
              CARD NUMBER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="card-number"
              name="card-number"
            />
            <div className="flex flex-row gap-5">
              <div className="flex flex-col">
                <label className="mt-2 font-bold" htmlFor="validity-period">
                  VALIDITY PERIOD:
                </label>
                <input
                  className="rounded-md h-8 px-2"
                  type="text"
                  id="validity-period"
                  name="validity-period"
                />
              </div>
              <div className="flex flex-col">
                <label className="mt-2 font-bold" htmlFor="cvc">
                  CVC:
                </label>
                <input
                  className="rounded-md h-8 px-2"
                  type="text"
                  id="cvc"
                  name="cvc"
                />
              </div>
            </div>
            {/* Make order */}
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH CARD
            </button>
            <p className="flex justify-center items-center h-20 font-bold">
              OR
            </p>
            <label className="mt-2 font-bold" htmlFor="swish-number">
              SWISH NUMBER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="swish-number"
              name="swish-number"
            />
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH SWISH
            </button>
            <button
              className="bg-themeRed text-pandaWhite rounded-md mt-10 mb-2 h-12"
              type="button"
              onClick={handleCancel}
            >
              CANCEL PAYMENT
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Payment;