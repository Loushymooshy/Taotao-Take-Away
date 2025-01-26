export const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/orders",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "ABC123",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  };