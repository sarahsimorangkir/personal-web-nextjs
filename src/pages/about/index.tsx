import GradientText from "@/components/ReactBits/GradientText/GradientText";
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
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        About Me
      </GradientText>
    </>
  );
};

export default About;
