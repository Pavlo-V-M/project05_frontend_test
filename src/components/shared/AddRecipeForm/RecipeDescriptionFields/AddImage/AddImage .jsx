import React, { useState } from 'react';
import addImage from '../../../../../images/addRecipe/addImage.png';
// import { addCocktailImg } from '../../../../services/Api';
import styles from './AddImage.module.scss';

const AddImage = ({ setFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const defaultImage = `${addImage}`;

  const handleFileChange = async event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFile(file);
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setFile(formData.append('file', file));
      // addCocktailImg(formData).catch(error => error.message);
    }
  };

  return (
    <label className={styles.imgWrapper} htmlFor="fileInput">
      <img
        className={styles.addImg}
        src={selectedFile ? URL.createObjectURL(selectedFile) : defaultImage}
        alt="Cocktail"
      />
      <input
        className={styles.imgInput}
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
      />
    </label>
  );
};

export default AddImage;
