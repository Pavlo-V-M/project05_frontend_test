import React, {useState,useEffect} from "react";
import styles from "./UserInfoModal.module.scss";
import Avatar from "../Avatar/Avatar";
import EditProfileModal from "../EditProfile/EditProfile";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { HiOutlinePencil } from "react-icons/hi"
import { FetchAllData,FetchById } from "../api/api";



const UserInfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
 const [dataFetch,setDataFetch] = useState([])

const handleFile = async (event) => {
  const selectedFile = event.target.files[0];
  console.log(selectedFile)
  if (selectedFile) {
    const blobUrl = URL.createObjectURL(selectedFile);
    setAvatarUrl(blobUrl);

    try {
      await FetchAllData(selectedFile);
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
};
  const id = "64ebe264d2ae7dabcb5be0db"
  const email = "vladyslav@gmail.com"
  
  
   useEffect(() => {
    FetchById(email)
      .then(data => {
         setDataFetch(data)
        console.log("Fetched data:", data);
      })
   
      .catch(error => {

        console.error("Error fetching data:", error);
      });
  }, []);


 


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
      <Avatar avatarUrl={avatarUrl} dataFetch={dataFetch} />
      <p onClick={ModalInfoOpen}>Victoria</p>

      {isModalInfoOpen && (
        <div className={styles.modal_overlay_info} onClick={ModalInfoClose}>
          <div className={styles.modal_info} onClick={handleModalClick}>
            <button onClick={ModalOpen} className={styles.button__edit_profile}>Edit profile <HiOutlinePencil/></button>
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
              dataFetch = {dataFetch}
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoModal;
