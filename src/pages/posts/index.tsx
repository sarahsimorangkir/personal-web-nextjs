import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";

const PostPage = () => {
  return (
    <div className={styles.PostPage}>
      <h1>Blog</h1>
      <p>Tought, Tech, and another things i interest about</p>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.cardGrid}>
          {new Array(6).fill(null).map((_, index) => (
            <PostCard
              key={index}
              url="/posts/1"
              title="This is my post bro"
              summary="So here we go, the post of my web, coming soon!"
              thumbnail="/posts/next.jpg"
            />
          ))}
        </div>

    </div>
  );
};
export default PostPage;
