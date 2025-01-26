import { StockItem } from "@/types/Stock";

const getStock = async (): Promise<StockItem[]> => {
  try {
    const token = localStorage.getItem("token"); // Adjust this to match where your token is stored
    if (!token) {
      throw new Error("No authentication token found.");
    }
    const response = await fetch(
      "https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/stock",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "ABC123",
          Authorization: `Bearer ${token}`, // Include the JWT token
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data }: { data: StockItem[] } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stockpile:", error);
    throw error;
  }
};

export default getStock;
