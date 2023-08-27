import React, { useRef } from "react";
import styles from "../UserInfoModal/UserInfoModal.module.scss"

const EditProfileModal = ({ isOpen, closeModal, avatarUrl, handleFile }) => {
  const inputRef = useRef(null);

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    isOpen && (
      <div className={styles["modal-overlay"]} onClick={closeModal}>
        <div className={styles.modal} onClick={handleModalContentClick}>
          <img
            src={avatarUrl || "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"}
            alt=""
            width="75"
          />
          <form action="">
            <input type="file" accept="image/*" name="file" ref={inputRef} onChange={handleFile} />
            <input type="text" className={styles.modal__info_input} placeholder="Victoria" />
            <button>Save changes</button>
            <button onClick={closeModal}>Close</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProfileModal;
