import React from "react";
import cartIcon from "../assets/cart.svg";

// const Header: React.FC = () => {
//   return (
//     <header className="flex items-center justify-between w-full sticky z-50 mb-10 bg-themeDarkGreen text-pandaWhite pt-2 pb-2">
//       <a
//         href="/"
//         className="flex font-Darumadrop text-4xl pl-10 font-extrabold tracking-widest"
//       >
//         TAOTAO
//       </a>
//       <nav className="flex pr-10">
//         <ul className="flex justify-between text-lg">
//           <li className="p-3">
//             <a href="/">MENU</a>
//           </li>
//           <li className="p-3">
//             <a href="/about-us">ABOUT US</a>
//           </li>
//           <li className="p-3">
//             <a href="/contact">CONTACT</a>
//           </li>
//           <button className="p-3">
//             <a href="/login">LOGIN</a>
//           </button>
//           <li className="p-3">
//             <a href="/cart">CART</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

const Header: React.FC = () => {
  return (
    <header className="bg-themeDarkGreen text-pandaWhite">
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
        <div className="relative">
          <button>
            <img src={cartIcon} alt="cartIcon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
