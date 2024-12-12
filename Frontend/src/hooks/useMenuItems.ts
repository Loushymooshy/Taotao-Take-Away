import { useState, useEffect } from "react";
import { MenuItem } from "@/types/Menu";
import getMenu from "@/api/getMenu";

// Custom hook for fetching menu items
const useMenuItems = (): {
  menuItems: MenuItem[];
  isLoading: boolean;
  error: string | null;
} => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      setError(null); // Reset the error on each fetch

      try {
        const data = await getMenu();
        setMenuItems(data);
      } catch {
        setError("Error fetching menu items");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, isLoading, error };
};

export default useMenuItems;
