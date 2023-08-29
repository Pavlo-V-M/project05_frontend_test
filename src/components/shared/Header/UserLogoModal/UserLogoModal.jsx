import React, { useEffect } from "react";
import { useState } from "react";
import SvgButtonModal from "../SvgButtonModal/SvgButtonModal";
import styles from"./UserLogoModal.module.scss"
import Navigation from "../Navigation/Navigation";
import SvgButtonClose from "../SvgButtonClose";

const UserLogoModal = () => {
    
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal()
      }
      
      
    }
    window.addEventListener("keydown", handleEscapeKey)
      
      return () => {
        window.removeEventListener("keydown",handleEscapeKey)
      }
    
    
  },[isModalOpen])
    
    
  return (
      <div>
        <button onClick={openModal} className={styles.modal__burger} >
        <SvgButtonModal className={styles.modal__burger} />
       </button>

    {isModalOpen && (
        <div className={styles["modal-overlay"]}>
          <div className={styles.backdrop} onClick={() => closeModal()}></div> 
        <div className={`${styles.modal} ${isModalOpen ? styles.slideIn : styles.slideOut}`}>
           <button className={styles["close-button"]} onClick={closeModal}>
            <SvgButtonClose  />
            </button>     
            <Navigation/>
        </div>
    </div>
)}





      </div>
    )
}

export default UserLogoModal