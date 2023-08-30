import React from "react";
import styles from "./Avatar.module.scss"




const Avatar = ({ avatarUrl,dataFetch }) => {
 const userAvatarURL = dataFetch.user?.avatarURL || avatarUrl;
  return (
    <img
      src={userAvatarURL}
      alt=""
      className={styles.header__img}
    />
  );
};

export default Avatar;
