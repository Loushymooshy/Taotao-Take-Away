interface MenuItem {
  menuID: string;
  category: string;
  ingredients: string[];
  name: string;
  price: number;
}

const getMenu = async (): Promise<MenuItem[]> => {
  const apiUrl = "https://g0htzmap62.execute-api.eu-north-1.amazonaws.com/menu";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MenuItem[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};

export default getMenu;
