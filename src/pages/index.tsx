/* eslint-disable react/no-unescaped-entities */
import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";
import getPostData from "@/lib/get-posts";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorPostCard from "@/components/PostCard/ErrorPostCard";
import Head from "next/head";
import {
  SplashCursor,
  SplitText,
  TrueFocus,
  ShinyText,
  GradientText,
} from "@/components/ReactBits";

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

export default function Home(props: Props) {
  const { postData } = props;

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <Head>
        <title>Sarah's Web - Homepage</title>
        <meta
          name="description"
          content="This is where i share my works, thoughts, and more"
        />
      </Head>
      <SplashCursor />

      <div className={styles.Home}>
        <div className={styles.heroSection}>
          <SplitText
            text="Hello, I'm Sarah!"
            className={styles.splitText}
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <TrueFocus
            sentence="Software Engineer"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <ShinyText
            text="Thank you for visiting! I'll be sharing my projects and thoughts here ^^"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>

        <div className={styles.newestPost}>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Latest Posts
          </GradientText>
          <div className={styles.cardGrid}>
            {postData.map(({ title, summary, image, id, date }) => (
              <div key={id}>
                <PostCard
                  title={title}
                  date={date}
                  summary={summary}
                  thumbnail={image}
                  url={`/posts/${id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const postData = getPostData({ limit: 0 });
  return {
    props: {
      postData,
    },
  };
}
