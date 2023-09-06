import { useState } from 'react';
import { ingredientsList } from './ingredientsList';
import css from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import './react-select.scss';
import { ReactComponent as X } from '../../../../images/addRecipe/X.svg';
import { ReactComponent as Plus } from '../../../../images/addRecipe/Plus.svg';
import { ReactComponent as Minus } from '../../../../images/addRecipe/Minus.svg';
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const MyComponent = () => (
//   <Select options={options} />
// )

export const RecipeIngredientsFields = () => {
  const [count, setCount] = useState(1);
  const [ingredients, setIngredients] = useState([ingredientsList]);
  // const [selectValue, setSelectValue] = useState('');
  const plusButtonHandler = () => {
    setCount(count + 1);
    setIngredients(prevState => [...prevState, [...ingredientsList]]);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
      return;
    }

    setIngredients(() => {
      const newIngredients = [...ingredients];
      newIngredients.pop();
      return newIngredients;
    });
  };

  // const handleChange = event => {
  //   console.log(event.target.value);
  // };

  console.log(ingredients.map((ingredient, index, arr) => arr[index]));

  return (
    // <div className="container">
    <div className={css.container}>
      <div className={css.title_thumb}>
        <h2 className={css.title}>Ingredients</h2>
        <div className={css.counter_thumb}>
          <button onClick={minusButtonHandler} className={css.counter_minus}>
            <Minus opacity={count === 1 ? 0.3 : 1} />
          </button>
          <span className={css.counter_display}>{count}</span>
          <button onClick={plusButtonHandler} className={css.counter_plus}>
            <Plus />
          </button>
        </div>
      </div>
      {/* With react-select */}
      <div className={css.select_thumb}>
        {ingredients?.map((arr, index) => (
          <div className={css.one_select_thumb} key={index}>
            <Select
              key={index}
              options={arr.map(({ title, _id: key }) => {
                return { value: title, label: title };
              })}
              className="ingredient"
              classNamePrefix="react-select-ingredient"
              placeholder={'Choose ingredient'}
            />
            <Select
              options={[
                { value: '1 cl', label: '1 cl' },
                { value: '100 cl', label: '100 cl' },
              ]}
              className="value"
              classNamePrefix="react-select-value"
              placeholder={'Vol.'}
            />
            <button
              className={css.delete_button}
              onClick={() => {
                if (count === 1) {
                  return;
                }
                setIngredients(() => {
                  const newIngredients = [...ingredients];
                  const idxOfIngredient = newIngredients.indexOf(arr);
                  newIngredients.splice(idxOfIngredient, 1);
                  setCount(count - 1);

                  return newIngredients;
                });
              }}
              type="button"
            >
              <X />
            </button>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
