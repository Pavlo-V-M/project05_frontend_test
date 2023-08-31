import React from "react";
import styles from "./Avatar.module.scss"



const Avatar = ({ avatarUrl }) => {
  return (
    <img
      src={avatarUrl || "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
      alt=""
      className={styles.header__img}
    />
  );
};

export default Avatar;
