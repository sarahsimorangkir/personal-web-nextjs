import { GradientText } from "@/components/ReactBits";
import styles from "./index.module.scss";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>Sarah&apos;s Web - About</title>
        <meta
          name="description"
          content="About me"
        />
      </Head>
      <div className={styles.About}>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        About Me
      </GradientText>
      </div>
    </>
  );
};

export default About;
