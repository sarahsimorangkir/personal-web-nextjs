import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "primary",
          fontSize: "20px",
          width: "100%",
          position: "sticky",
          top: "10px",
          right: "0",
          margin: "0 0 50px 0",
        }}
      >
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>  
              <Link href="/github-projects">Projects</Link>
            </li>
            <li>
              <Link href="/posts">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;