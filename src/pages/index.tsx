/* eslint-disable react/no-unescaped-entities */
import PostCard from "@/components/PostCard";
import styles from "./index.module.scss";
import Image from "next/image";
import getPostData from "@/lib/get-posts";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorPostCard from "@/components/PostCard/ErrorPostCard";
import Head from "next/head";
// import { gsap } from "gsap";

// gsap.registerPlugin(MotionPathPlugin,ScrollToPlugin, TextPlugin);

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

  return (
    <>
   <Head>
    <title>Sarah's Web - Homepage</title>
    <meta name="description" content="This is where i share my works, thoughts, and more"/>
   </Head>
    <div className={styles.Home}>
      <h1>Welcome to my personal web!</h1>
      <p>
        Thank you for visiting! I'll be sharing my projects and thoughts here ^^
      </p>
      <div>
        <Image
          src="/posts/test.png"
          width={400}
          height={400}
          alt="image"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs6KKKAEPSoXqVjUDmgCGSqz1NIarO1AEbGoyaVmqMtQBIDUimq4apUagC0hqdKqo1WEagC0lSrVdDUymgCWikBpaACiiigAppamF6Yz0AK7VA7UrvVeR6AGyNVaR6WR6qySUADvUZeoXlqEze9AFwSVKj1nCb3qZJaANNHqwj1mxyVajkoA0EaplaqSPU6PQBbVqeGqsr08PQBNuoqLfRQBCXpjPUJemM9AD3eq8klI71WkkoASWSqUstLNLWZdXIQEk0ASzXAHeqUl8oP3qz5rhpT1wKhoA1Uv1J+9VyG5B71z1SRzPGflPHpQB1cU2e9XIpa5y0vA4681qwzZ70AbEclWEesyKSrSSUAX1enh6qK9PD0AWd9FV99FAEJeo2emk0xjQAjvVSV6lkaqczUAVbmXANYdzMZXIzwKv38hVDWTQAUUUUAFFFFADkcowZetbNncb1BrEq1YyFZNvrQB0sMlXI3rKt24FX42oAvK9SBqrIakBoAm3UVHmigBppjVMVpjLQBUkFU5h1rQkWqkyUAYOog7DWbW5eQ7lIrEZSrFT1FACUUUUAFFFFABU9oMzCoK0bCA/eI5NAGnbjgVfiFVoE6VdjWgCVKlFIi1IFoAbRT9tFAE5SmMlWylMZKAKLpVWWOtJ0qvJHQBjTxZzWNe2pPzKORXTSxVQnhz2oA5gjBwaStS5sgxyODVFraRT0zQBDRUy20jdsVbt7HBBbk0AQWtqZGDMOK27eDAHFEFuBjir8UVABFHVuNKI46solADVSpAlSKlSBKAINlFWNlFAFkpTWSrO2mstAFJ0qvIlX3WoHSgDNkjqnLFWrIlVZEoAyZIfaq7W49K1XjqEx0AUFtx6VYjh9qsCOpUjoAZHFVuOOljjqzGlACIlWESlRKmVaAGqlPCVIq08LQBDsoqfbRQBLSEZpaKAInWq7rVthUDigCnItVpFq5IKruKAKbrURSrLCoyKAIwlSotAFSKKAHotWEWo0FWEFAEiLUyrTEFTKKAFC0/FApaAExRS0UAFFFFACN0qB6KKAK0lV3oooArtTDRRQACpVoooAmSrCUUUATpUy0UUASUUUUAFFFFAH/9k="
        />
      </div>

      <div className={styles.newestPost}>
        <h2>Latest Post</h2>
        <div className={styles.cardGrid}>
          {postData.map(({ title, summary, image, id, date }) => {
            return (
              <div key={id}>
                {/* <ErrorBoundary key={id} fallback={<ErrorPostCard/>}> */}
                <PostCard
                  title={title}
                  date={date}
                  summary={summary}
                  thumbnail={image}
                  url={`/posts/${id}`}
                />
              {/* </ErrorBoundary> */}
              </div>
            );
          })}
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
