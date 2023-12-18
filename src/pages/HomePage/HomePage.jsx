import React from "react";
import { TypedText } from "../../components/TypedText/TypedText";
import styles from "./HomePage.module.css";
import { Avatar } from "../../components/Avatar/Avatar";
import { AnimatedComponentWrapper } from "../../components/AnimatedComponentWrapper/AnimatedComponentWrapper";

export const HomePage = () => {
  return (
    <AnimatedComponentWrapper>
      <div className={styles.container}>
        {/* <div className={styles.leftSection}> */}
          <div className={styles.textContainer}>
            <span className={styles.text}>Hi, I'm Illia </span>
            <TypedText texts={["Backend", "Frontend", "FullStack"]} />
            <span className={styles.text}>Developer </span>
          </div>
        </div>
        {/* <div className={styles.rightSection}>
          <Avatar src={'./avatar-removebg-preview.png'}/>
        </div> */}
      {/* </div> */}
    </AnimatedComponentWrapper>
  );
};
