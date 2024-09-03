import React, { ReactNode } from "react";
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
          fontSize: "18px",
          width: "30%",
          height: "30px",
          position: "sticky",
          top: "10px",
          right: "15px",
          margin: "0 0 100px auto",
        }}
      >
        <ul className={styles.menu}>

          {/* <li>
          <a href="/">SarahOYS <span>.</span></a>
          </li> */}
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
      </header>
      {children}
    </div>
  );
};

export default Layout;
