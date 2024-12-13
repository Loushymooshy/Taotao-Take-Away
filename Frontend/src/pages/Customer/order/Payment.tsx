import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleCancel = () => {
    navigate("/");
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendOrderToDatabase = async (order: any) => {
    try {
      console.log("Sending order to database:", JSON.stringify(order, null, 2));
      const response = await fetch(
        "https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "ABC123",
          },
          body: JSON.stringify(order),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Response error:", errorDetails);
        throw new Error(`Failed to send order to database: ${errorDetails}`);
      }
      console.log("Order successfully sent to the database");
    } catch (error) {
      console.error("Error sending order to database:", error);
    }
  };

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    const newOrder = {
      items: cartItems.map((item) => ({
        menuID: item.id, // Item details with the menuID
        name: item.name,
        quantity: item.quantity,
      })),
      total: totalPrice, // Total price for the order
    };

    // Check if there are no items in the cart
    if (!newOrder.items.length) {
      console.error("No items found in cart");
      return;
    }

    try {
      console.log("Sending order to database:", newOrder);
      // Send the newOrder payload directly to the database
      await sendOrderToDatabase(newOrder);

      // Clear the cart and navigate to confirmation on success
      clearCart();
      localStorage.setItem("order", JSON.stringify(newOrder)); // Store order in localStorage
      navigate("/confirmation", { state: newOrder });
    } catch (error) {
      console.error("Error submitting the order:", error);
    }
  };

  return (
    <>
      <main className="w-1/2 mx-auto">
        <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
          PAYMENT
        </h1>
        <section className="flex flex-row gap-10">
          <section className="drop-shadow bg-pandaWhite text-pandaBlack flex flex-col gap-10 p-6 rounded-md w-72">
            <h2 className="font-bold text-xl">YOUR ORDER</h2>
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
            <h2 className="font-bold text-xl">
              TOTAL: ${totalPrice.toFixed(2)}
            </h2>
          </section>
          <form
            className="drop-shadow bg-pandaWhite text-pandaBlack flex flex-col p-6 rounded-md w-72"
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
            <div className="flex flex-row gap-5 flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2">
                <label className="mt-2 font-bold" htmlFor="validity-period">
                  VALIDITY PERIOD:
                </label>
                <input
                  className="rounded-md h-8 px-2 w-full"
                  type="text"
                  id="validity-period"
                  name="validity-period"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <label className=" font-bold" htmlFor="cvc">
                  CVC:
                </label>
                <input
                  className="rounded-md h-8 px-2 w-full"
                  type="text"
                  id="cvc"
                  name="cvc"
                />
              </div>
            </div>
            {/* Make order */}
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite shadow-md rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH CARD
            </button>
            <p className="flex justify-center items-center h-20 font-bold">
              OR
            </p>
            <label className="mt-2 font-bold " htmlFor="swish-number">
              SWISH NUMBER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="swish-number"
              name="swish-number"
            />
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen shadow-md text-pandaWhite rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH SWISH
            </button>
            <button
              className="bg-themeRed text-pandaWhite shadow-md rounded-md mt-10 mb-2 h-12"
              type="button"
              onClick={handleCancel}
            >
              CANCEL PAYMENT
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Payment;
