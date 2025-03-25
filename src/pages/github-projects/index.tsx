import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../data/data";
import styles from "./index.module.scss";
import Head from "next/head";
import GradientText from "@/components/ReactBits/GradientText/GradientText";

const GithubPage = () => {
  return (
    <>
      <Head>
        <title>Sarah&apos;s Web - Projects</title>
        <meta name="description" content="This is where i share my projects" />
      </Head>
      <div className={styles.projectsContainer}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          My Projects
        </GradientText>
        <p className={styles.subtitle}>
          Showcase of my works on web development.
        </p>

        <div className={styles.projectGrid}>
          {data.length > 0 ? (
            data.map(({ id, name, description, stack, image }, index) => (
              <div className={styles.projectCard} key={id || index}>
                <h2 className={styles.projectTitle}>{name}</h2>
                <p className={styles.projectDescription}>{description}</p>

                <div className={styles.techStack}>
                  {Array.isArray(stack)
                    ? stack
                    : stack.split(", ").map((tech, i) => (
                        <span key={i} className={styles.techIcon}>
                          {tech}
                        </span>
                      ))}
                </div>

                <div className={styles.projectImageContainer}>
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className={styles.projectImage}
                  />
                </div>

                <Link href="#" className={styles.seeMore}>
                  See more →
                </Link>
              </div>
            ))
          ) : (
            <p className={styles.noData}>No projects available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GithubPage;
