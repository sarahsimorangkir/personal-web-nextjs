import React from "react";
import { data } from "../../data/data";
import styles from "./index.module.scss"; 
import Image from "next/image";

const GithubPage = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.subtitle}>Showcase of my works on frontend development.</p>
      <div className={styles.projectGrid}>
        {data.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <h2 className={styles.projectTitle}>{project.name}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
            {project.stack.split(", ").map((tech, i) => (
              <span key={i} className={styles.techIcon}>
                {tech}
              </span>
            ))}
            </div>
            <div className={styles.projectImageContainer}>
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className={styles.projectImage}
              />
            </div>
            <a href="#" className={styles.seeMore}>See more →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubPage;