import React from "react";


const Avatar = ({ avatarUrl }) => {
  return (
    <img
      src={avatarUrl || "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"}
      alt=""
      width="75"
    />
  );
};

export default Avatar;
