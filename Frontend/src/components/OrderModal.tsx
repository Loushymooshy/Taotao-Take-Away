import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

type Order = {
    id: number
    customerName: string
    items: string
    status: "pending" | "in-progress" | "completed"
    comment: string
    chefNote: string
    isLocked: boolean
  }
  

type OrderModalProps = {
  order: Order | null
  onSave: () => void
  setEditingOrder: (order: Order) => void
}

export default function OrderModal({ order, onSave, setEditingOrder }: OrderModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Order</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-customer" className="text-right">
              Customer
            </Label>
            <Input
              id="edit-customer"
              value={order?.customerName || ""}
              onChange={(e) => setEditingOrder({ ...order!, customerName: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-items" className="text-right">
              Items
            </Label>
            <Input
              id="edit-items"
              value={order?.items || ""}
              onChange={(e) => setEditingOrder({ ...order!, items: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-status" className="text-right">
              Status
            </Label>
            <Select 
              value={order?.status} 
              onValueChange={(value) => setEditingOrder({ ...order!, status: value as Order["status"] })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
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
              value={order?.comment || ""}
              onChange={(e) => setEditingOrder({ ...order!, comment: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="edit-chefNote" className="text-right">
              Chef Note
            </Label>
            <Textarea
              id="edit-chefNote"
              value={order?.chefNote || ""}
              onChange={(e) => setEditingOrder({ ...order!, chefNote: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-themeGreen text-white  hover:bg-themeDarkGreen" onClick={onSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}