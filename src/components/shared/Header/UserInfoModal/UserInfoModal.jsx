import React, { useEffect, useState} from "react";
import styles from "./UserInfoModal.module.scss";
import Avatar from "../Avatar/Avatar";
import EditProfileModal from "../EditProfile/EditProfile";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { HiOutlinePencil } from "react-icons/hi"
import {FetchById} from "../api/api-header";
import { useSelector } from "react-redux";



const UserInfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [avatarUrl] = useState(null);
  const [dataUser, setDataUser] = useState([])
  
  const authData = useSelector(state => state.auth.data)
  
 
 
  useEffect(() => {
    if (authData?.user.email) {
  FetchById( authData.user.email)
      .then(data => {
         setDataUser(data)
        console.log("Fetched data:", data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
}
    
  }, [authData?.user.email]);

const handleModalClick = (event) => {
  event.stopPropagation();
};

  const updateDataUser = (newDataUser) => {
  setDataUser(newDataUser);
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
      <Avatar avatarUrl={avatarUrl} dataUser={dataUser} />
      <p onClick={ModalInfoOpen}>
         {dataUser && dataUser.user && dataUser.user.name ? dataUser.user.name : "victoria"}
        </p>

      {isModalInfoOpen && (
        <div className={styles.modal_overlay_info} onClick={ModalInfoClose}>
          <div className={styles.modal_info} onClick={handleModalClick}>
            <button onClick={ModalOpen} className={styles.button__edit_profile}>Edit profile <HiOutlinePencil/></button>
            <LogoutBtn isOpen={isModalLogoutOpen}
              dataUser={dataUser}
              authData={authData}
              closeModal={ModalLogoutClose}
              openModal={ModalLogoutOpen}
              handleModalClick ={handleModalClick}
              
                      />
            <EditProfileModal
              isOpen={isModalOpen}
              closeModal={ModalClose}
              avatarUrl={avatarUrl}
              dataUser={dataUser}
              authData={authData}
              updateDataUser={updateDataUser}
              
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoModal;