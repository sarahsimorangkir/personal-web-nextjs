import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
    <ul>
      <li>
        <button onClick={()=>router.push('/dashboard')}>Go to Home</button>
      </li>
      <li>
        {/* <Link href={{
          pathname: '/blog/[type]/[id]',
          query: { type: 'post', id: 123 },
        }}>Go to Blog</Link> */}
        <button onClick={()=>router.push('/blog/post/143')}>Go to Blog</button>
      </li>
      </ul>  
    </>
  );
}
