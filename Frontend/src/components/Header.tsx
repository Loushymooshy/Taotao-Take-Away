import React from "react";
import login from "../assets/login.svg";
import { ShoppingCartDropdown } from "./shopping-cart";

const Header: React.FC = () => {
  return (
    <header className="bg-themeDarkGreen text-pandaWhite shadow-md">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="font-Darumadrop text-4xl font-extrabold tracking-widest"
        >
          TAOTAO
        </a>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/about-us" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <div className="flex space-x-6">
          <img src={login} alt="login" />
          <ShoppingCartDropdown/>
        </div>
      </div>
    </header>
  );
};

export default Header;
