import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Customer/Home";
import AboutUs from "./pages/Customer/AboutUs";
import Cart from "./pages/Customer/order/Cart";
import Contact from "./pages/Customer/Contact";
import OrderHistory from "./pages/Customer/OrderHistory";
import Payment from "./pages/Customer/order/Payment";
import Confirmation from "./pages/Customer/order/Confirmation";
import Orders from "./pages/Admin/Orders";
import UpdateMenu from "./pages/Admin/UpdateMenu";
import StorageStatus from "./pages/Admin/StorageStatus";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/update-menu" element={<UpdateMenu />} />
        <Route path="/admin/storage-status" element={<StorageStatus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
