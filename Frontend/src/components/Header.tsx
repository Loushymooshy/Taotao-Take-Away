import React from "react";
import cartIcon from "../assets/cart.svg";
import login from "../assets/login.svg";

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
          <img className="shadow-md" src={login} alt="login" />
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
