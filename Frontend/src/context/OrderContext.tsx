import React, { createContext, useContext, useState, useEffect } from "react";

interface Order {
  id: number;
  date: string;
  items: { name: string; quantity: number }[];
  total: number;
}

interface OrderContextProps {
  orders: Order[];
  addOrder: (newOrder: Order) => void;
}

// Skapa context med korrekt typ
const OrderContext = createContext<OrderContextProps | undefined>(undefined);

interface OrderProviderProps {
  children: React.ReactNode; // Typen för children som ska tas emot
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Hämta tidigare order (mock eller från backend)
    const fetchOrders = async () => {
      const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(savedOrders);
    };
    fetchOrders();
  }, []);

  const addOrder = (newOrder: Order) => {
    console.log("Adding order:", newOrder); // Debug-utskrift
    const isDuplicate = orders.some((order) => order.id === newOrder.id);
    if (!isDuplicate) {
      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    }
  };
  

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook för att använda context
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
