import React, { useRef, useState } from "react";
import styles from "./EditProfile.module.scss";
import { PatchDataHeader,FetchById } from "../api/api-header";

const EditProfileModal = ({ isOpen, closeModal, dataUser, authData,updateDataUser }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(`${dataUser?.user.name}`);
  const [avatarFiles, setAvatarFiles] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  const minLength = 6;

  const handleFile = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setAvatarFiles(selectedFile);
      const blobUrl = URL.createObjectURL(selectedFile);
      setAvatarUrl(blobUrl);
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

 const handleSaveChangesClick = () => {
  if ((inputValue || dataUser.user.name) || avatarFiles) {
    PatchDataHeader(avatarFiles, inputValue || dataUser.user.name)
      .then((response) => {
  console.log("Response from server:", response);
  closeModal();

  
  FetchById(authData.user.email)
    .then((data) => {
      console.log("Fetched data after saving changes:", data);

      updateDataUser(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})

  }
};

    const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
     if (value.length < minLength) {
       event.target.style.border = "1px solid #DA141480"
       setIsButtonDisabled(true)
  } else {
       event.target.style.border = "1px solid #3CBC8180"
       setIsButtonDisabled(false)
  }
  };
   

  return (
    isOpen && (
      <div className={styles["modal-overlay"]} onClick={closeModal}>
        <div className={styles.modal} onClick={handleModalContentClick}>
          <img
            src={avatarUrl || dataUser?.user?.avatarURL}
            alt=""
            className={styles.modal__info_img_modal}
          />
          <form action="" className={styles.modal__info_form}>
            <label htmlFor="">
              <input type="file" accept="image/*" name="file" ref={inputRef} onChange={handleFile} className={styles.modal__info_addimg}/>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.modal__info_button_add}
                onClick={() => inputRef.current.click()}>
                <circle cx="16" cy="16" r="16" fill="#546081" />
                <path d="M16.25 11V21.5" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 16.25H21.5" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </label>
            <input type="text"
            className={styles.modal__info_input}
            onChange={handleInputChange}
              value={inputValue}
            /> 
             {inputValue.length < minLength && (
              <p className={styles.modal__info_p}>Minimum {minLength} letters</p>
            )}
          </form>
        <button className={styles.modal__info__save} onClick={handleSaveChangesClick} disabled={isButtonDisabled}>Save changes</button>
        </div>
      </div>
    )
  );
};

export default EditProfileModal;