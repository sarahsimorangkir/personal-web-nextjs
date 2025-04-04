import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const techStacks = [
  { src: "/icons/reactjs.png", alt: "React" },
  { src: "/icons/nextjs.svg", alt: "Next.js" },
  { src: "/icons/nodejs.svg", alt: "Node.js" },
  { src: "/icons/typescript.svg", alt: "TypeScript" },
  { src: "/icons/graphql.png", alt: "GraphQL" },
  { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
];

const TechStack = () => {
  return (
    <div className={styles.TechStack}>
      <p>Here are my current favorite tech stack:</p>
      <div className={styles.TechIcons}>
        {techStacks.map((tech, index) => (
          <div key={index} className={styles.tooltipContainer}>
            <Image src={tech.src} alt={tech.alt} width={40} height={40} />
            <span className={styles.tooltip}>{tech.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
