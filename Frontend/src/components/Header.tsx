import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full sticky z-50 mb-10 bg-themeDarkGreen text-pandaWhite pt-2 pb-2">
      <a
        href="/"
        className="flex font-Darumadrop text-4xl pl-10 font-extrabold tracking-widest"
      >
        TAOTAO
      </a>
      <nav className="flex pr-10">
        <ul className="flex justify-between text-lg">
          <li className="p-3">
            <a href="/">MENU</a>
          </li>
          <li className="p-3">
            <a href="/about-us">ABOUT US</a>
          </li>
          <li className="p-3">
            <a href="/contact">CONTACT</a>
          </li>
          <button className="p-3">
            <a href="/login">LOGIN</a>
          </button>
          <li className="p-3">
            <a href="/cart">CART</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
