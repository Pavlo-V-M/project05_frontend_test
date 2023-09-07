import React from "react";
import styles from "./LogoutBtn.module.scss"; 
import { logout } from "redux/slices/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const LogoutBtn = ({ isOpen, closeModal, openModal,handleModalClick,dataUser,authData}) => {
  const dispatch = useDispatch();
 
  

  
  const handleLogout = async () => {
    try {
      
      await dispatch(logout(dataUser._id));
      console.log("Sucssesfull")
      localStorage.clear()
     
    } catch (error) {
      console.log(error.message)
    }
  };
  
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
            <button className={styles.logoutButton_modal} onClick={handleLogout}>
            <Link className={styles.logoutButton_link} to={`/registration`}>Logout</Link>
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