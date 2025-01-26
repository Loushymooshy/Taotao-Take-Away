import React, { useEffect, useState } from "react";
import { ShoppingCartDropdown } from "./ShoppingCart";
import LoginButtonWithModal from "./LoginButtonWithModal";

const Header: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
    window.location.reload(); // Reload the page to reflect changes
  };

  return (
    <header className="bg-themeDarkGreen text-pandaWhite top-0 sticky z-50">
      <div className="container mx-auto max-w-screen-xl px-4 py-2 flex justify-between items-center">
        <a
          href="/"
          className="font-Darumadrop text-4xl tracking-widest text-outline-black"
        >
          TAOTAO
        </a>
        <nav className="space-x-6">
          {role === 'admin' ? (
            <>
              <a href="/admin/orders" className="hover:underline">
                ORDERS
              </a>
              <a href="/admin/update-menu" className="hover:underline">
                MENU
              </a>
              <a href="/admin/storage-status" className="hover:underline">
                INVENTORY
              </a>
            </>
          ) : (
            <>
              <a href="/" className="hover:underline">
                MENU
              </a>
              <a href="/about-us" className="hover:underline">
                ABOUT US
              </a>
              <a href="/contact" className="hover:underline">
                CONTACT
              </a>
               {/* Order History link for customers */}
               {role === "customer" && (
                <a href="/order-history" className="hover:underline">
                  ORDER HISTORY
                </a>
              )}
            </>
          )}
        </nav>

        <div className="flex space-x-6">
          {role ? (
            <button onClick={handleLogout} className="hover:underline">
              LOG OUT
            </button>
          ) : (
            <LoginButtonWithModal />
          )}
          <ShoppingCartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;