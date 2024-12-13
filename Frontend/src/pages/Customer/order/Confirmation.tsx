// import React, { useEffect, useState } from "react";
// import { useCart } from "@/context/CartContext";

// type OrderItem = {
//   name: string;
//   quantity: number;
// };

// type Order = {
//   id: number;
//   restaurant: string;
//   date: string;
//   items: OrderItem[];
//   total: number;
// };

// const OrderConfirmation: React.FC = () => {
//   const { cartItems, removeItem } = useCart();
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("order");
//     if (savedOrder) {
//       setOrders([JSON.parse(savedOrder)]);
//     } else if (cartItems.length > 0) {
//       // Create a new order from cart items
//       const newOrder: Order = {
//         id: Date.now(),
//         restaurant: "Your Restaurant",
//         date: new Date().toISOString().split("T")[0],
//         items: cartItems.map((item) => ({
//           name: item.name,
//           quantity: item.quantity,
//         })),
//         total: cartItems.reduce(
//           (sum, item) => sum + item.price * item.quantity,
//           0
//         ),
//       };

//       setOrders([newOrder]);
//       localStorage.setItem("order", JSON.stringify(newOrder));

//       // Clear the cart items
//       cartItems.forEach((item) => removeItem(item.id));
//     }
//   }, [cartItems, removeItem]);

//   // const [status, setStatus] = useState<"Pending" | "Changed" | "Cancelled">(
//   //   "Pending"
//   // );
//   const [estimatedTime] = useState<string>("30 mins"); // Static estimated time

//   // const handleChangeOrder = () => {
//   //   setStatus("Changed");
//   // };

//   // const handleCancelOrder = () => {
//   //   setStatus("Cancelled");
//   // };

//   return (
//     <main className="w-1/2 mx-auto">
//       <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
//         CONFIRMATION
//       </h1>

//       {/* Visa orderlista */}
//       <div className="bg-pandaWhite p-6 rounded-lg w-70">
//         <div>
//           {orders.map((order) => (
//             <div key={order.id} className="rounded-lg p-4 transition">
//               <div className="flex justify-between items-center mb-2">
//                 <h2 className="text-lg font-semibold">{order.restaurant}</h2>
//                 <span className="text-sm text-gray-500">{order.date}</span>
//               </div>
//               <ul className="mb-2 divide-x-0">
//                 {order.items.map((item, index) => (
//                   <li key={index} className="text-gray-700">
//                     {item.quantity}x {item.name}
//                   </li>
//                 ))}
//               </ul>
//               <span className="font-semibold text-gray-700">
//                 Total: ${order.total.toFixed(2)}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Visa Estimated Time, Change Order och Cancel Order */}
//         <div
//           className={`mt-6 p-4 rounded-lg ${
//             status === "Cancelled" ? "opacity-50" : ""
//           }`}
//         >
//           <div className="flex justify-between items-center">
//             <span className="text-pandaBlack font-semibold">
//               Estimated Time: {estimatedTime}
//             </span>
//           </div>
//           <div>
//             <div className="flex space-x-4 my-5">
//               {/* <button
//                 onClick={handleChangeOrder}
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   status === "Changed"
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-yellow-500 hover:bg-yellow-600"
//                 }`}
//                 disabled={status !== "Pending"}
//               >
//                 Change Order
//               </button>
//               <button
//                 onClick={handleCancelOrder}
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   status === "Cancelled"
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-red-500 hover:bg-red-600"
//                 }`}
//                 disabled={status !== "Pending"}
//               >
//                 Cancel Order
//               </button> */}
//             </div>
//           </div>
//           {status !== "Pending" && (
//             <p className="mt-2 text-sm text-gray-500">
//               Status: <span className="font-semibold">{status}</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default OrderConfirmation;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get the state passed via navigation

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
  const { state } = useLocation(); // Extract the state (order details) from the location
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (state) {
      // If state is available (it should be passed from the previous page)
      const { orderID, items, total } = state;

      // Construct the order object
      const newOrder: Order = {
        id: orderID, // Assuming orderID is passed
        date: new Date().toISOString().split("T")[0], // Use the current date
        items: items || [], // Items from the API response
        total: total, // Total from the API response
      };

      setOrder(newOrder);
    } else {
      // If there's no state, try to get from localStorage
      const savedOrder = localStorage.getItem("order");
      if (savedOrder) {
        setOrder(JSON.parse(savedOrder));
      }
    }
  }, [state]);

  if (!order) {
    return <div>Loading...</div>; // Show loading state while data is fetched
  }

  return (
    <main className="w-1/2 mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
        ORDER CONFIRMATION
      </h1>

      {/* Order Details */}
      <div className="bg-pandaWhite p-6 rounded-lg w-70">
        <div>
          <div key={order.id} className="rounded-lg p-4 transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">
                Your order was successful!
              </h2>
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
        </div>

        {/* Estimated Time and Order Status (if needed) */}
        <div className="mt-6 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-pandaBlack font-semibold">
              Estimated Time: 30 mins
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
