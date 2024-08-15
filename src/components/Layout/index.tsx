import React, { ReactNode } from "react";

interface LayoutProps{
    children : React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          height: "80px",
          top: "0",
          marginBottom: "10px",
        }}
      >
        this is header
      </header>
      {children}
    </div>
  );
};

export default Layout;
