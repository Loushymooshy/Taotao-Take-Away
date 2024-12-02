import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/customer/Home";
import AboutUs from "./pages/customer/AboutUs";
import Cart from "./pages/customer/order/Cart";
import Contact from "./pages/customer/Contact";
import OrderHistory from "./pages/customer/OrderHistory";
import Payment from "./pages/customer/order/Payment";
import Confirmation from "./pages/customer/order/Confirmation";
import Orders from "./pages/admin/Orders";
import UpdateMenu from "./pages/admin/UpdateMenu";
import StorageStatus from "./pages/admin/StorageStatus";

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
