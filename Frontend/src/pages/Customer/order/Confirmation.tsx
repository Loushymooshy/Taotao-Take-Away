import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOrder } from "@/context/OrderContext";

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

const OrderConfirmation: React.FC = () => {
  const { state } = useLocation();
  const [order, setOrder] = useState<Order | null>(null);
  const { addOrder } = useOrder();
  const [hasAddedOrder, setHasAddedOrder] = useState(false); // Lägg till en flagga

  useEffect(() => {
    if (state && !hasAddedOrder) {
      const { items, total } = state;

      const newOrder: Order = {
        id: Date.now(), // Generera unikt ID
        date: new Date().toISOString().split("T")[0], // Dagens datum
        items: items || [],
        total: total,
      };

      console.log("New order being added:", newOrder); // Debug-utskrift
      setOrder(newOrder);
      addOrder(newOrder); // Lägg till ordern i OrderContext
      setHasAddedOrder(true); // Sätt flaggan för att förhindra fler anrop
    }
  }, [state, hasAddedOrder, addOrder]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-1/2 mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
        ORDER CONFIRMATION
      </h1>
      <div className="bg-pandaWhite p-6 rounded-lg w-70">
        <div>
          <div className="rounded-lg p-4 transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Your order was successful!</h2>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            <ul className="mb-2 divide-x-0">
              {order.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.quantity}x {item.name}
                </li>
              ))}
            </ul>
            <span className="font-semibold text-gray-700">Total: ${order.total.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-pandaBlack font-semibold">Estimated Time: 30 mins</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
