// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Define the props type
type LayoutProps = {
  children: React.ReactNode; // "children" is a ReactNode, which covers all valid JSX content
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
