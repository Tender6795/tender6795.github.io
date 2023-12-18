import React from "react";
import styles from "./AboutPage.module.css";
import { Avatar } from "../../components/Avatar/Avatar";
import { AnimatedComponentWrapper } from "../../components/AnimatedComponentWrapper/AnimatedComponentWrapper";

export const AboutPage = () => {
  return (
    <AnimatedComponentWrapper>
    <div className={styles.page}>
      <h1 className={styles.headerAboutMe}>About Me</h1>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Avatar src={'./avatar-removebg-preview1.png'}/>
        </div>
        <div className={styles.rightSection}>
          <span className={styles.textAboutMe}>
            Welcome to my corner of the digital world! I find true joy in
            crafting real solutions for new challenges, particularly in the
            realm of web applications using React and Node.js. With a solid
            4-year foundation in the MERN stack, I specialize in implementing
            best approaches to build functional apps with clean code.
          </span>
        </div>
      </div>
    </div>
    </AnimatedComponentWrapper>
  );
};
