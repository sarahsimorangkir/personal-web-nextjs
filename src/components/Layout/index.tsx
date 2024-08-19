import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "primary",
          width: "30%",
          height: "30px",
          top: "10",
          position: "sticky",
          margin: "0 auto",
        }}
      >
        <ul className={styles.menu}>

          {/* <li>
          <a href="/">SarahOYS <span>.</span></a>
          </li> */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
};

export default Layout;
