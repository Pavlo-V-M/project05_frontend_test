import React from "react";
import styles from "./Avatar.module.scss"



const Avatar = ({ avatarUrl }) => {
  return (
    <img
      src={avatarUrl || "../../../images/header/user.png"}
      alt=""
      className={styles.header__img}
    />
  );
};

export default Avatar;
