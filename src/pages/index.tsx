import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.Home}>
        <h1>Welcome to my personal web!</h1>
        <p>Thank you for visiting! I'll be sharing my projects and thoughts here ^^</p>
      </div>
      <div className={styles.newestPost}>
        <h2>Newest Post</h2>  
        <div className={styles.cardGrid}>
          {new Array(4).fill(null).map((_, index) => (
            <PostCard
              key={index}
              title="This is my post bro"
              summary="So here we go, the post of my web, coming soon!"
              thumbnail="https://webapp.io/blog/content/images/2022/12/Frame-119-1-.png"
            />
          ))}
        </div>
      </div>
    </div>
  );
}