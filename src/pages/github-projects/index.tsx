import React from "react";
import { data } from "../../data/data";
import styles from "./index.module.scss"; // Import the SCSS file

const GithubPage = () => {
  // projects file
  const project = data;
  
  return (
    <div className={styles.workContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <p className={styles.title}>Projects</p>
          <p className={styles.subtitle}>Check out some of my past projects</p>
        </div>
        <div className={styles.projectContainer}>
          {project.map((item, index) => (
            <div className={styles.projectCard} key={index}>
              <img
                className={styles.projectImage}
                // src={item.image}
                // alt={item.image}
              />
              <div className={styles.projectDetails}>
                <div className={styles.projectName}>{item.name}</div>
                <p className={styles.projectDescription}>{item.description}</p>
              </div>
              <div className={styles.projectStackContainer}>
                {item.stack.split(", ").map((stackItem, index) => (
                  <span key={index} className={styles.stackItem}>
                    #{stackItem}
                  </span>
                ))}
                <div className={styles.projectLinks}>
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank" className={styles.link}>
                    <button className={styles.button}>Code {"</>"}</button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank" className={styles.link}>
                    <button className={styles.button}>Website {"->"}</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubPage;
