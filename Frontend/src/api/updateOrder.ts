import { Order } from '../types/Order';

export const updateOrder = async (orderID: string, updates: Partial<Order>) => {
    try {
      console.log("Updating order with ID:", orderID);
      console.log("Updates:", updates);

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

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error text:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
};