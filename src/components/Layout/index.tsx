import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Blog" },
  { href: "/github-projects", label: "Projects" },
  { href: "/about", label: "About" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const pageHeight = window.innerHeight;

      if(currentScrollY < pageHeight){
        setShowHeader(true);
      }else if(currentScrollY < lastScrollY.current){
        setShowHeader(true)
      }else{
        setShowHeader(false)
      }
      lastScrollY.current = currentScrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);



  return (
    <div>
      <header className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
        <nav className={styles.navbar}>
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navItem} ${
                router.pathname === href ? styles.active : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
