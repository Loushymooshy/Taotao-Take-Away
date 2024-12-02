import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Taotao</h1>
      <nav>
        <ul>
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <a href="/about-us">ABOUT US</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <button>
            <a href="/login">LOGIN</a>
          </button>
          <li>
            <a href="/cart">CART</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
