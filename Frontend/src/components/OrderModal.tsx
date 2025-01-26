import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
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

  useEffect(() => {
    setLocalOrder(order);
  }, [order]);

  const handleSave = () => {
    if (localOrder) {
      onSave(localOrder);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Order</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-items" className="text-right">
              Items
            </Label>
            <Input
              id="edit-items"
              value={localOrder?.items.map(item => `${item.name}:${item.menuID}:${item.quantity}`).join(', ') || ""}
              onChange={(e) => {
                const items = e.target.value.split(',').map(item => {
                  const [name, menuID, quantity] = item.split(':');
                  return { name, menuID, quantity: Number(quantity) };
                });
                setLocalOrder({ ...localOrder!, items });
              }}
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