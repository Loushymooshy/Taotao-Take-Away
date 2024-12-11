import React from "react";
import { ShoppingCartDropdown } from "./ShoppingCart";
import LoginButtonWithModal from "./LoginButtonWithModal";


const Header: React.FC = () => {
  return (
    <header className="bg-themeDarkGreen text-pandaWhite shadow-md">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="font-Darumadrop text-4xl tracking-widest text-outline-black"
        >
          TAOTAO
        </a>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">
            MENU
          </a>
          <a href="/about-us" className="hover:underline">
            ABOUT US
          </a>
          <a href="/contact" className="hover:underline">
            CONTACT
          </a>
        </nav>

        <div className="flex space-x-6">
          <LoginButtonWithModal/>
          <ShoppingCartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
