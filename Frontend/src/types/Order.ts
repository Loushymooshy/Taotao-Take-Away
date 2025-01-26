export type Order = {
    orderID: string;
    items: { name: string; menuID: string; quantity: number }[];
    status: "in-progress" | "completed";
    comment: string;
    chefNote: string;
    isLocked: boolean;
};