import React, { useEffect, useState } from "react";

type OrderItem = {
  name: string;
  quantity: number;
};

type Order = {
  id: number;
  date: string;
  items: OrderItem[];
  total: number;
};

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Mock data or API call
  useEffect(() => {
    const fetchOrders = async () => {
      // Simulate API call with mock data
      const mockOrders: Order[] = [
        {
          id: 1,
          date: "2024-12-01",
          items: [
            { name: "Margherita Pizza", quantity: 1 },
            { name: "Garlic Bread", quantity: 2 },
          ],
          total: 20.5,
        },
        {
          id: 2,
          date: "2024-11-25",
          items: [
            { name: "California Roll", quantity: 3 },
            { name: "Miso Soup", quantity: 1 },
          ],
          total: 35.0,
        },
      ];

      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  return (
    <main className="w-1/2 mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
        Order History
      </h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">You have no previous orders.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="drop-shadow bg-pandaWhite rounded-lg shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl text-pandaBlack-700 font-bold">
                  {order.date}
                </span>
                <button
                  className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite rounded-md h-9 text-sm
                px-2"
                >
                  ORDER AGAIN
                </button>
              </div>
              <div className="flex justify-between items-center">
                <ul className="mb-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-pandaBlack-700">
                      {item.quantity}x {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-pandaBlack-700 font-semibold">
                  Total: ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default OrderHistory;
