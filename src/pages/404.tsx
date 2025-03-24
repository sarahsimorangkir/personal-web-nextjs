import Link from "next/link";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className={styles.homeLink}>
        <button className={styles.button}>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
