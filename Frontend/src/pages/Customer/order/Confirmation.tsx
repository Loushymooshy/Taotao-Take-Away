import React, { useState } from "react";

type OrderItem = {
  name: string;
  quantity: number;
};

type Order = {
  id: number;
  restaurant: string;
  date: string;
  items: OrderItem[];
  total: number;
};

const OrderConfirmation: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      restaurant: "Pizza Palace",
      date: "2024-12-01",
      items: [
        { name: "Margherita Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 2 },
      ],
      total: 20.5,
    },
    {
      id: 2,
      restaurant: "Sushi Express",
      date: "2024-12-01",
      items: [
        { name: "California Roll", quantity: 3 },
        { name: "Miso Soup", quantity: 1 },
      ],
      total: 35.0,
    },
  ]);

  const [status, setStatus] = useState<"Pending" | "Changed" | "Cancelled">("Pending");
  const [estimatedTime] = useState<string>("30 mins"); // Static estimated time

  // Hantera statusförändring för alla ordrar
  const handleChangeOrder = () => {
    setStatus("Changed");
  };

  const handleCancelOrder = () => {
    setStatus("Cancelled");
  };

  return (
    <main>
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">CONFIRMATION</h1>

      {/* Visa orderlista */}
      <div className="bg-pandaWhite p-6 rounded-lg divide-y divide-pandaBlack">
      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            className={`rounded-lg p-4 transition  ${
              status === "Cancelled" ? "opacity-50" : ""
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{order.restaurant}</h2>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            <ul className="mb-2 divide-x-0">
              {order.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.quantity}x {item.name}
                </li>
              ))}
            </ul>
            <span className="font-semibold text-gray-700">
              Total: ${order.total.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Visa Estimated Time, Change Order och Cancel Order */}
      <div
        className={`mt-6 p-4 rounded-lg ${
          status === "Cancelled" ? "opacity-50" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-pandaBlack font-semibold">
            Estimated Time: {estimatedTime}
          </span>
          </div>
          <div>
          <div className="flex space-x-4">
            <button
              onClick={handleChangeOrder}
              className={`px-4 py-2 rounded-lg text-white ${
                status === "Changed"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
              disabled={status !== "Pending"}
            >
              Change Order
            </button>
            <button
              onClick={handleCancelOrder}
              className={`px-4 py-2 rounded-lg text-white ${
                status === "Cancelled"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              disabled={status !== "Pending"}
            >
              Cancel Order
            </button>
          </div>
        </div>
        {status !== "Pending" && (
          <p className="mt-2 text-sm text-gray-500">
            Status: <span className="font-semibold">{status}</span>
          </p>
          
        )}
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;


/*
const Confirmation: React.FC = () => {
  return (
    <>
      <h1>CONFIRMATION</h1>
      <main>
        <article>
          <h3>Item 1</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
        <article>
          <h3>Item 2</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
        <article>
          <h3>Item 3</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
      </main>
      <section>
        <h3>TOTAL:</h3>
        <h3>300 kr</h3>
      </section>
      <section>
        <h3>ESTIMATED TIME:</h3>
        <p>15 Minutes</p>
      </section>
      <section>
        <button>CHANGE MY ORDER</button>
        <button>CANCEL ORDER</button>
      </section>
    </>
  );
};

export default Confirmation;*/
