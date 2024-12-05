import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Define the props type
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
