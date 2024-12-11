import { useState, useEffect } from "react";
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

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function ShoppingCartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]") // Hämta från localStorage
  );
  const [comment, setComment] = useState(""); // För kommentar till kocken

  useEffect(() => {
    // Uppdatera localStorage varje gång cartItems ändras
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Din varukorg är tom!");
      return;
    }

    try {
      const response = await fetch("https://<din-api-gateway>/order/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer <din-jwt-token>", // Lägg till din JWT-token
          "x-api-key": "ABC123", // Lägg till din API-nyckel
        },
        body: JSON.stringify({
          items: cartItems,
          comment, // Lägg till kommentaren
        }),
      });

      if (response.ok) {
        alert("Order skickad!");
        setCartItems([]); // Rensa varukorgen
        setComment(""); // Rensa kommentaren
      } else {
        const result = await response.json();
        alert(`Fel vid orderläggning: ${result.error}`);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Tekniskt fel vid checkout!");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="relative bg-transparent p-0">
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
          <SheetDescription>You have {totalItems} item(s) in your cart</SheetDescription>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 border-t pt-4">
            <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Lämna en kommentar till kocken..."
            className="w-full border border-gray-300 rounded p-2 mt-4"
          ></textarea>
          <Button
            className="w-full mt-4 bg-themeGreen text-white px-5 py-1 hover:bg-themeDarkGreen"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
