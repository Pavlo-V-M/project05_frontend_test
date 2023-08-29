import React from "react";
import styles from "./LogoutBtn.module.scss"; 

const LogoutBtn = ({ isOpen, closeModal, openModal,handleModalClick }) => {
  
  
  return (
    <div>
      <button className={styles.logoutButton} onClick={openModal}>
        Logout
      </button>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          
          <div className={styles.modal} onClick={handleModalClick}>
            <p>Are you sure you want to log out?</p>
            <div className={styles.modal__info_div}>
            <button className={styles.logoutButton_modal} onClick={closeModal}>
              Logout
            </button>
            <button className={styles.cancelButton} onClick={closeModal}>
              Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutBtn;