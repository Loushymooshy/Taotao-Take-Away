import { Order } from '../types/Order';

export const updateOrder = async (orderID: string, updates: Partial<Order>) => {
    try {
      const response = await fetch(
        `https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/orders/${orderID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "ABC123",
          },
          body: JSON.stringify(updates),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
};