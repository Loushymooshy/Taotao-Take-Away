import { useState, useEffect } from "react";
import { StockItem } from "@/types/Stock";
import getStock from "@/api/getStock";

// Custom hook for fetching stock
const useInventory = (): {
  StockItems: StockItem[];
  isLoading: boolean;
  error: string | null;
} => {
  const [StockItems, setStockItems] = useState<StockItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStock = async () => {
      setIsLoading(true);
      setError(null); // Reset the error on each fetch

      try {
        const data = await getStock();
        setStockItems(data);
      } catch {
        setError("Error fetching stockpile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStock();
  }, []);

  return { StockItems, isLoading, error };
};

export default useInventory;
