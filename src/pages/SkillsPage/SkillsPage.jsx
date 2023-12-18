import React from "react";
import styles from "./SkillsPage.module.css";
import { Card } from "antd";
import { AnimatedComponentWrapper } from "../../components/AnimatedComponentWrapper/AnimatedComponentWrapper";

export const SkillsPage = () => {
  return (
    <div className={styles.page}>
      <AnimatedComponentWrapper>
      <h1 className={styles.headerSkills}>Skills</h1>
      <div className={styles.skillsContainer}>
        <Card title="Main" bordered={false} className={styles.card}>
          <p>HTML/ CSS</p>
          <p>JavaScript/TypeScript</p>
          <p>RestApi</p>
          <p>GraphQL</p>
        </Card>
        <Card title="Frontend" bordered={false} className={styles.card}>
          <p>React</p>
          <p>Redux</p>
          <p>Redux Toolkit</p>
          <p>Next</p>
          <p>MaterialUI, Ant Design, Bootstrap</p>
        </Card>
        <Card title="Backend" bordered={false} className={styles.card}>
          <p>Express</p>
          <p>Nest</p>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>MySQL</p>
        </Card>
      </div>
    </AnimatedComponentWrapper>
    </div>
  );
};
