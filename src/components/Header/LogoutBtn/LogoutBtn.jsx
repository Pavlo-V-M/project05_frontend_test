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
            <button className={styles.logoutButton} onClick={closeModal}>
              Logout
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutBtn;