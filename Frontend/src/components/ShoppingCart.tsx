import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import cartIcon from "../assets/cart.svg";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export function ShoppingCartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, incrementItem, decrementItem, removeItem } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="relative bg-transparent p-1 shadow-none">
          <img src={cartIcon} alt="cartIcon" className="h-8 w-8" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-zinc-900 text-zinc-50 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center dark:bg-zinc-50 dark:text-zinc-900">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open shopping cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            You have {totalItems} item(s) in your cart
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => decrementItem(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => incrementItem(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 border-t pt-4">
            <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <Button
            className="w-full mt-4 bg-themeGreen text-white px-5 py-1 hover:bg-themeDarkGreen"
            onClick={() => navigate("/cart")}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}