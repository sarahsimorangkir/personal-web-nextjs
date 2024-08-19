import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";

type ComponentWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement)=> React.ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
    const getLayout = (Component as ComponentWithLayout).getLayout ||((page)=><Layout>{page}</Layout>)
    return getLayout(<Component/>)
  
}
