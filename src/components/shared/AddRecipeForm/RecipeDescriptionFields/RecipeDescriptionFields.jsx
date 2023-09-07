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
  const [title, setTitle] = useState({});
  // const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGlass, setSelectedGlass] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [prepatarion, setPreparation] = useState('');
  const [clearValue, setClearValue] = useState();

  useEffect(() => {
    if (categories.length === 0 && glasses.length === 0) {
      instance.get('/recipes/category-list').then(response => {
        setCategories([...response.data]);
        // console.log(response.data, '11111111111');
      });

      instance.get('/glass').then(response => {
        setGlasses([...response.data]);
        // console.log(response.data, '222222222222');
      });
    }
  }, [categories, glasses]);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const handleGlassSelect = glass => {
    setSelectedGlass(glass);
  };
  const onSubmitHandler = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const ingredients = selectedIngredients.filter(item => item.ingredient);
    const measure = selectedIngredients.filter(item => item.measure);

    const data = {
      drink: title.title,
      instructions: title.about,
      category: selectedCategory,
      glass: selectedGlass,
      ingredients: [
        ...ingredients.map((item, index) => {
          return {
            title: item.ingredient,
            measure: measure[index].measure,
            ingredientThumb:
              'https://res.cloudinary.com/difg7vp6s/image/upload/v1694084396/samples/block_h8rinv.svg',
            'thumb-medium':
              'https://res.cloudinary.com/difg7vp6s/image/upload/v1694084632/samples/image_lckqap.svg',
            'thumb-small':
              'https://res.cloudinary.com/difg7vp6s/image/upload/v1694084632/samples/unsplash_J9lD6FS6_cs_yuqatd.svg',
          };
        }),
      ],
      describe: prepatarion,
    };
    instance.post('/own', data);
    form.reset();
    setClearValue(null);
    return;
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.AddRecipeFormWrap}>
      <div className={styles.imgFieldWrapper}>
        <div>
          <AddImage
          // setFile={setSelectedFile}
          />
        </div>
        <div className={styles.inputWrapper}>
          <InputField
            setTitle={setTitle}
            name="title"
            className={styles.inputField}
            placeholder="Enter item title"
          />
          <InputField
            setTitle={setTitle}
            name="about"
            className={styles.inputField}
            placeholder="Enter about recipe"
          />
          <div className={styles.inputFilter}>
            <FilterCategory
              clearValue={clearValue}
              value={selectedCategory}
              categories={categories}
              onSelect={handleCategorySelect}
            />
            <FilterGlass
              clearValue={clearValue}
              glasses={glasses}
              value={selectedGlass}
              onSelect={handleGlassSelect}
            />
          </div>
        </div>
      </div>
      <RecipeIngredientsFields
        onSelectIngredients={setSelectedIngredients}
        clearValue={clearValue}
      />
      <RecipePreparation setPreparation={setPreparation} />
    </form>
  );
};

export default RecipeDescriptionFields;
