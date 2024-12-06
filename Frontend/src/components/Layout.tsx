import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

// Define the props type
type LayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isHomePage && <Hero />}
      <main className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-center items-center my-36">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
