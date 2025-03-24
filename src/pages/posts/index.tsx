import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";
import getPostData from "@/lib/get-posts";
import { ChangeEvent, useMemo, useState } from "react";

interface PostData {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  content: string;
}

interface Props {
  postData: PostData[];
}
const PostPage = (props: Props) => {
  const { postData } = props;
  const [searchValue, setSearchValue] = useState("")

  const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value);
  }

  const filteredData = useMemo(()=>{
    if(!searchValue) return postData;
    const searchValueLower = searchValue.toLocaleLowerCase();
    return postData.filter(({title})=>{
      const titleLower = title.toLocaleLowerCase();

      return titleLower.includes(searchValueLower);
    })
  },[postData, searchValue])

  return (
    <div className={styles.PostPage}>
      <h1>Blog</h1>
      <p>Tought, Tech, and another things i interest about</p>
      <div className={styles.searchInput}>
        <input onChange={handleChange} type="text" placeholder="Search..." />
      </div>
      <div className={styles.cardGrid}>
      {filteredData.length > 0 ? (
        filteredData.map(({ id, title, date, summary, image }) => (
          <PostCard
            key={id}
            url={`/posts/${id}`}
            title={title}
            summary={summary}
            thumbnail={image}
            date={date}
          />
        ))
      ) : (
        <p>No Data Displayed</p>
      )}
      </div>
    </div>
  );
};
export default PostPage;

export async function getStaticProps() {
  const posts = getPostData({
    limit: 0,
  });
  return {
    props: {
      postData: posts,
    },
  };
}
