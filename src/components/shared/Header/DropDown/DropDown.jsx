import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.scss"



const DropDown = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    
    
    
    return (
        <div>
            <button onClick={openModal}>open</button>
            {isModalOpen && (
            <div className={styles["modal-overlay"]}>
                    <div className={`${styles.modal} ${isModalOpen}`}>
                        
               <button onClick={closeModal}>close</button>
                </div>
                </div>
            )}

        </div>
    )
}


export default DropDown