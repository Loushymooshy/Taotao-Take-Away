import { MenuItem } from "@/types/Menu";

const getMenu = async (): Promise<MenuItem[]> => {
  try {
    const response = await fetch(
      "https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/menu",
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

    const { data }: { data: MenuItem[] } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};

export default getMenu;
