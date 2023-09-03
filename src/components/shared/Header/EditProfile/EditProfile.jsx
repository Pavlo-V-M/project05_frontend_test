import React, { useRef } from "react";
import styles from "./EditProfile.module.scss"


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
            src={avatarUrl || "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
            alt=""
            className={styles.modal__info_img_modal}
          />
          <form action="" className={styles.modal__info_form}>
            <label htmlFor="" >
              <input type="file" accept="image/*" name="file" ref={inputRef} onChange={handleFile} className={styles.modal__info_addimg} />
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.modal__info_button_add} onClick={() => inputRef.current.click()}>
             <circle cx="16" cy="16" r="16" fill="#546081"/>
             <path d="M16.25 11V21.5" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M11 16.25H21.5" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>

            </label>
            <input type="text" className={styles.modal__info_input} placeholder="Victoria" />
            <button className={styles.modal__info__save}>Save changes</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProfileModal;
