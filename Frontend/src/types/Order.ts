export type Order = {
  orderID: string;
  items: { menuID: string; name: string; quantity: number }[];
  total: number;
  status?: "in-progress" | "completed";
  timestamp?: string;
  comment: string;
  chefNote?: string;
};

