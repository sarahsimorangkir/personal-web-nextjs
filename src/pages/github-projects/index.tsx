import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../data/data";
import styles from "./index.module.scss";

const GithubPage = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Projects</h1>
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
  );
};

export default GithubPage;
