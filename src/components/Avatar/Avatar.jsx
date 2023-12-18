import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({src}) => {
  return (
    <img
      className={styles.avatar}
      src={src}
      alt="avatart"
    />
  );
};
