import React from "react";
import styles from "./LogoutBtn.module.scss"; 

const LogoutBtn = ({ isOpen, closeModal, openModal }) => {
  return (
    <div>
      <button className={styles.logoutButton} onClick={openModal}>
        Logout
      </button>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.logoutButton} onClick={closeModal}>
              Logout
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutBtn;