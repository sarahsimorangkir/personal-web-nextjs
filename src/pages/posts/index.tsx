import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";
import getPostData from "@/lib/get-posts";
import { ChangeEvent, useMemo, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import GradientText from "@/components/ReactBits/GradientText/GradientText";

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
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (!searchValue) return postData;
    const searchValueLower = searchValue.toLocaleLowerCase();
    return postData.filter(({ title }) => {
      const titleLower = title.toLocaleLowerCase();

      return titleLower.includes(searchValueLower);
    });
  }, [postData, searchValue]);

  // const PostCard = dynamic(()=>import('@/components/PostCard'),{
  //   loading: ()=><p>Loading...</p>,
  // })

  return (
    <>
      <Head>
        <title>Sarah&apos;s Web - Blog</title>
        <meta
          name="description"
          content="This is where i share my thoughts, and more"
        />
      </Head>
      <div className={styles.PostPage}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          My Blogs
        </GradientText>
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
    </>
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
