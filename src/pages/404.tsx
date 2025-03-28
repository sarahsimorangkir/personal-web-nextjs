import Link from "next/link";
import styles from "./NotFound.module.scss";
import {ShinyText } from "@/components/ReactBits";


const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <div className={styles.message}>
        <ShinyText
          text="Oops! The page you are looking for doesn't exist"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
      <Link href="/" className={styles.homeLink}>
        <button className={styles.button}>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
