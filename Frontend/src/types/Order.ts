export type Order = {
    orderID: string;
    customerName: string;
    items: { name: string; menuID: string; quantity: number }[];
    status: "pending" | "in-progress" | "completed";
    comment: string;
    chefNote: string;
    isLocked: boolean;
  };