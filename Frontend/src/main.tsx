import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meny from "./pages/Kund/Meny";
import OmOss from "./pages/Kund/OmOss";
import Varukorg from "./pages/Kund/Varukorg&Betalning/Varukorg";
import Kontakt from "./pages/Kund/Kontakt";
import OrderHistorik from "./pages/Kund/OrderHistorik";
import Betalning from "./pages/Kund/Varukorg&Betalning/Betalning";
import OrderBekräftelse from "./pages/Kund/Varukorg&Betalning/Orderbekräftelse";
import Beställning from "./pages/Anställd/Beställningar";
import AnställdMeny from "./pages/Anställd/AnställdMeny";
import Lagerstatus from "./pages/Anställd/Lagerstatus";

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
