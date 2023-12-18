import React from "react";
import { Button, Anchor } from "antd";
import styles from "./Header.module.css";

const { Link } = Anchor;
export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <a href="#section1" title="" className={styles.link}>Home</a>
        <a href="#section2" title="" className={styles.link}>About me</a>
        <a href="#section3" title="" className={styles.link}>My skills</a>
        <a href="#section3" title="" className={styles.link}>Projects</a>
      </div>
    </>
  );
};
