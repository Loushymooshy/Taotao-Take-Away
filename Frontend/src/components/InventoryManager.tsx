import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddItemModal } from "./AddItemModal";
import useInventory from "@/hooks/useInventory";

export default function InventoryManager() {
  const { StockItems, isLoading, error } = useInventory();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  // const handleRemoveItem = async (formData: FormData) => {
  //   const id = formData.get("id");
  //   useInventory(inventory.filter((item) => item.id !== id));
  //   toast({
  //     title: "Success",
  //     description: "Item removed successfully",
  //   });
  // };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Inventory List</h2>
        <AddItemModal />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {StockItems.map((item) => (
            <TableRow key={item.ingredient}>
              <TableCell>{item.ingredient}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handleRemoveItem(new FormData(e.currentTarget));
                  }}
                >
                  <input type="hidden" name="id" value={item.ingredient} />
                  <Button type="submit" className="bg-themeRed" size="sm">
                    Remove
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
