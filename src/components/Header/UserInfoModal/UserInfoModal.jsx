import React, { useState} from "react";
import styles from "./UserInfoModal.module.scss";
import Avatar from "../Avatar/Avatar";
import EditProfileModal from "../EditProfile/EditProfile";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const UserInfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
 

const handleFile = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const blobUrl = URL.createObjectURL(selectedFile);
    setAvatarUrl(blobUrl); 
  }
};

  
  

const handleModalClick = (event) => {
  event.stopPropagation();
};


  const ModalOpen = () => {
    setIsModalOpen(true);
  };

  const ModalClose = () => {
    setIsModalOpen(false);
  };

  const ModalInfoOpen = () => {
    setIsModalInfoOpen(true);
  };

  const ModalInfoClose = () => {
    setIsModalInfoOpen(false);
    };
     const ModalLogoutOpen = () => {
    setIsModalLogoutOpen(true);
  };

  const ModalLogoutClose = () => {
    setIsModalLogoutOpen(false);
  };

  return (
    <div className={styles.div__auth_header}>
      <Avatar avatarUrl={avatarUrl} />
      <p onClick={ModalInfoOpen}>Victoria</p>

      {isModalInfoOpen && (
        <div className={styles.modal_overlay_info} onClick={ModalInfoClose}>
          <div className={styles.modal_info} onClick={handleModalClick}>
            <button onClick={ModalOpen} className={styles.button__edit_profile}>Edit profile</button>
                      <LogoutBtn isOpen={isModalLogoutOpen}
                          closeModal={ModalLogoutClose}
              openModal={ModalLogoutOpen}
              handleModalClick ={handleModalClick}
              
                      />
            <EditProfileModal
              isOpen={isModalOpen}
              closeModal={ModalClose}
              avatarUrl={avatarUrl}
              handleFile={handleFile}
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoModal;
