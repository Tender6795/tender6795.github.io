import { Card } from "antd";
import React from "react";
import styles from "./ProjectItem.module.css";

export const ProjectItem = ({ title, description, imgPath, link }) => {
  return (
    <div>
      <Card
        title={<a href={link}> {title} </a>}
        bordered={false}
        className={styles.card}
      >
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <pre className={styles.description}>{description}</pre>
          </div>
          <div className={styles.rightSection}>
            <img src={imgPath} alt="project image" className={styles.img} />
          </div>
        </div>
      </Card>
    </div>
  );
};
