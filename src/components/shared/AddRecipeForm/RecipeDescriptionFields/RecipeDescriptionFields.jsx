import React, { useState, useEffect } from 'react';
import { instance } from '../../../../components/services/Api';
import AddImage from './AddImage/AddImage ';
import InputField from './InformationRecipeField/InformationRecipeField';
import FilterCategory from './FilterForInput/FilterCategory';
import FilterGlass from './FilterForInput/FilterGlass';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparation from '../RecipePreparation/RecipePreparation';
import styles from './RecipeDescriptionFields.module.scss';

const RecipeDescriptionFields = () => {
  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGlass, setSelectedGlass] = useState('');

  useEffect(() => {
    if (categories.length === 0 && glasses.length === 0) {
      instance.get('/recipes/category-list').then(response => {
        setCategories([...response.data]);
        console.log(response.data, '11111111111');
      });

      instance.get('/glass').then(response => {
        setGlasses([...response.data]);
        console.log(response.data, '222222222222');
      });
    }
  }, [categories, glasses]);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const handleGlassSelect = glass => {
    setSelectedGlass(glass);
  };

  return (
    <form className={styles.AddRecipeFormWrap}>
      <div className={styles.imgFieldWrapper}>
        <div>
          <AddImage />
        </div>
        <div className={styles.inputWrapper}>
          <InputField
            className={styles.inputField}
            placeholder="Enter item title"
          />
          <InputField
            className={styles.inputField}
            placeholder="Enter about recipe"
          />
          <div className={styles.inputFilter}>
            <FilterCategory
              value={selectedCategory}
              categories={categories}
              onSelect={handleCategorySelect}
            />
            <FilterGlass
              glasses={glasses}
              value={selectedGlass}
              onSelect={handleGlassSelect}
            />
          </div>
        </div>
      </div>
      <RecipeIngredientsFields />
      <RecipePreparation />
    </form>
  );
};

export default RecipeDescriptionFields;
