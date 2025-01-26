export type Order = {
    orderID: string;
    items: { name: string; menuID: string; quantity: number }[];
    status: "pending" | "in-progress" | "completed";
    comment: string;
    chefNote: string;
    isLocked: boolean;
};