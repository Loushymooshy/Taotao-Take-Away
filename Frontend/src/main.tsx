import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meny from "./pages/customer/Home";
import OmOss from "./pages/customer/AboutUs";
import Varukorg from "./pages/customer/Cart&Payment/Cart";
import Kontakt from "./pages/customer/Contact";
import OrderHistorik from "./pages/customer/OrderHistory";
import Betalning from "./pages/customer/Cart&Payment/Payment";
import OrderBekräftelse from "./pages/customer/Cart&Payment/Confirmation";
import Beställning from "./pages/admin/Orders";
import AnställdMeny from "./pages/admin/StoreItems";
import Lagerstatus from "./pages/admin/StorageStatus";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found!");
}

// Använd createRoot från 'react-dom/client'
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meny />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/varukorg" element={<Varukorg />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="/orderhistorik" element={<OrderHistorik />} />
        <Route path="/betalning" element={<Betalning />} />
        <Route path="/orderbekräftelse" element={<OrderBekräftelse />} />
        
        <Route path="/user-beställning" element={<Beställning />} />
        <Route path="/user-meny" element={<AnställdMeny />} />
        <Route path="/user-lagerstatus" element={<Lagerstatus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
