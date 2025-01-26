import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OrderModal from "../components/OrderModal";
import { fetchOrders } from "@/api/getOrder";
import { updateOrder as updateOrderAPI } from "@/api/updateOrder";
import { Order } from "@/types/Order";

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndSetOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders();
        if (Array.isArray(fetchedOrders)) {
          setOrders(fetchedOrders);
          setFilteredOrders(fetchedOrders);
        } else {
          console.error("Fetched orders is not an array:", fetchedOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAndSetOrders();
  }, []);

  useEffect(() => {
    let result = orders;
    if (statusFilter && statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter);
    }
    setFilteredOrders(result);
  }, [orders, statusFilter]);
  
  const updateOrder = (orderID: string, updates: Partial<Order>) => {
    setOrders(
      orders.map((order) => (order.orderID === orderID ? { ...order, ...updates } : order))
    );
  };

  const completeOrder = (orderID: string) => {
    updateOrder(orderID, { status: "completed" });
  };

  const handleEditSave = async (updatedOrder: Order) => {
    try {
      await updateOrderAPI(updatedOrder.orderID, updatedOrder);
      updateOrder(updatedOrder.orderID, updatedOrder);
      setEditingOrder(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>

      <div className="flex gap-4 mb-4">
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Comment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.orderID}>
              <TableCell>{order.orderID}</TableCell>
              <TableCell>
                {order.items.map((item, index) => (
                  <div key={index}>
                    {item.name} (x{item.quantity})
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    order.status === "completed"
                      ? "bg-themeGreen text-white  hover:bg-themeDarkGreen"
                      : "bg-pandaWhite text-black hover:bg-themeCream "
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Input
                  value={order.comment}
                  onChange={(e) => updateOrder(order.orderID, { comment: e.target.value })}
                  disabled={order.isLocked}
                />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Chef Note
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Chef Note</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="chefNote" className="text-right">
                            Note
                          </Label>
                          <Textarea
                            id="chefNote"
                            value={order.chefNote}
                            onChange={(e) => updateOrder(order.orderID, { chefNote: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {order.status !== "completed" && (
                    <Button
                      className="w-full bg-themeGreen text-white  hover:bg-themeDarkGreen"
                      onClick={() => completeOrder(order.orderID)}
                      size="sm"
                    >
                      Complete
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingOrder(order);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingOrder && (
        <OrderModal
          order={editingOrder}
          onSave={handleEditSave}
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
}