import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Order } from "@/types/Order";

type OrderModalProps = {
  order: Order | null;
  onSave: (updatedOrder: Order) => void;
  onClose: () => void;
  isOpen: boolean;
};

export default function OrderModal({ order, onSave, onClose, isOpen }: OrderModalProps) {
  const [localOrder, setLocalOrder] = useState<Order | null>(order);
  const [itemsInput, setItemsInput] = useState<string>("");

  useEffect(() => {
    setLocalOrder(order);
    setItemsInput(order?.items.map(item => `${item.name}:${item.menuID}:${item.quantity}`).join(', ') || "");
  }, [order]);

  const handleSave = () => {
    if (localOrder) {
      const items = itemsInput.split(',').map(item => {
        const [name, menuID, quantity] = item.split(':');
        if (!name || !menuID || isNaN(Number(quantity))) {
          return null;
        }
        return { name, menuID, quantity: Number(quantity) };
      }).filter(item => item !== null);
      onSave({ ...localOrder, items: items as Order["items"] });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Order</DialogTitle>
          <DialogDescription>
            Update the details of the order below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-items" className="text-right">
              Items
            </Label>
            <Input
              id="edit-items"
              value={itemsInput}
              onChange={(e) => setItemsInput(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-status" className="text-right">
              Status
            </Label>
            <Select 
               value={localOrder?.status} 
               onValueChange={(value) => setLocalOrder({ ...localOrder!, status: value as Order["status"] })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-comment" className="text-right">
              Comment
            </Label>
            <Textarea
              id="edit-comment"
              value={localOrder?.comment || ""}
              onChange={(e) => setLocalOrder({ ...localOrder!, comment: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-chefNote" className="text-right">
              Chef Note
            </Label>
            <Textarea
              id="edit-chefNote"
              value={localOrder?.chefNote || ""}
              onChange={(e) => setLocalOrder({ ...localOrder!, chefNote: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-themeGreen text-white  hover:bg-themeDarkGreen" onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}