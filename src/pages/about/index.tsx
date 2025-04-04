import { GradientText, PixelTransition } from "@/components/ReactBits";
import styles from "./index.module.scss";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import TechStack from "@/components/TechStack";

const About = () => {
  return (
    <>
      <Head>
        <title>Sarah&apos;s Web - About</title>
        <meta name="description" content="About me" />
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

        <div className={styles.AboutContainer}>
          <div className={styles.ImageContainer}>
            <PixelTransition
              firstContent={
                <Image
                  src="/photos/profile.jpeg"
                  alt="default"
                  width={500}
                  height={500}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                    }}
                  >
                    Thanks for Visiting!
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>

          <div className={styles.TextContainer}>
            <h2>Sarah Omega Yulie Simorangkir</h2>
            <p>
              Hello! You can call me <strong>Sarah</strong>. I work
              professionally as a Software Engineer, primarily focusing on
              full-stack web development by building and managing both the
              frontend and backend of web applications.
            </p>
            <p>
              My journey into web development began during the pandemic, which
              required all university activities to be held online from home.
              During that time, I joined an apprenticeship and training program
              to explore the field more seriously. This experience led me to
              pursue an internship, where I deepened my skills and gained
              hands-on experience—eventually paving the way to my current
              professional career.
            </p>
            <p>
              Throughout my learning journey, I discovered that writing
              documentation helps me better understand and retain new concepts.
              I hope the posts I share not only help me, but also support others
              who are learning as well.
            </p>
            <TechStack/>
          </div>
        </div>
        <div className={styles.Contact}>
          <h3>Contact</h3>
          <p>
            Feel free to reach out and connect with me through any of the social
            media platforms listed below. I&apos;d love to hear from you!
          </p>
          <ul>
            <li>
              Email -{" "}
              <a href="mailto:sarahsimorangkir34@gmail.com">
                sarahsimorangkir34@gmail.com
              </a>
            </li>
            <li>
              Github -{" "}
              <a
                href="https://github.com/sarahsimorangkir"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/sarahsimorangkir
              </a>
            </li>
            <li>
              LinkedIn -{" "}
              <a
                href="https://www.linkedin.com/in/sarah-omega/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/sarah-omega/
              </a>
            </li>
            <li>
              Spotify -{" "}
              <a
                href="https://open.spotify.com/user/31b6cfd4fvy7peo7fy72r7dptjmi?si=ZoEP7Z7cRpyeIxy_Lo9-AA"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://open.spotify.com/user/31b6cfd4fvy7peo7fy72r7dptjmi?si=ZoEP7Z7cRpyeIxy_Lo9-AA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
