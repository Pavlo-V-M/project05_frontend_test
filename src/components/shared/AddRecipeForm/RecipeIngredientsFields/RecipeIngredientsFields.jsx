import { useState } from 'react';
import Select from 'react-select';
import { ingredientsList } from './ingredientsList';
import css from './RecipeIngredientsFields.module.scss';
import './react-select.scss';
import { ReactComponent as X } from '../../../../images/addRecipe/X.svg';
import { ReactComponent as Plus } from '../../../../images/addRecipe/Plus.svg';
import { ReactComponent as Minus } from '../../../../images/addRecipe/Minus.svg';

export const RecipeIngredientsFields = ({
  onSelectIngredients,
  clearValue,
}) => {
  const [count, setCount] = useState(1);
  const [ingredients, setIngredients] = useState([ingredientsList]);

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

  const handleIngredientsChange = selectedOption => {
    onSelectIngredients(state => {
      const newState = [...state];
      newState.push({ [selectedOption.value]: selectedOption.label });
      return newState;
    });
  };
  // const handleMeasureChange = selectedOption => {
  //   onSelectMeasure(state => {
  //     return {
  //       ...state,
  //       [selectedOption.label]: selectedOption.value,
  //     };
  //   });
  // };

  return (
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
      <div className={css.select_thumb}>
        {ingredients?.map((arr, index) => (
          <div className={css.one_select_thumb} key={index}>
            <Select
              key={index}
              options={arr.map(({ title, _id: key }) => {
                return { value: 'ingredient', label: title };
              })}
              name="ingredients"
              value={clearValue}
              onChange={handleIngredientsChange}
              className="ingredient"
              classNamePrefix="react-select-ingredient"
              placeholder={'Choose ingredient'}
            />
            <Select
              options={[
                { label: 'cl', value: 'measure' },
                { label: 'oz', value: 'measure' },
                { label: 'tsp', value: 'measure' },
                { label: 'tblsp', value: 'measure' },
                { label: 'part', value: 'measure' },
                { label: 'ml', value: 'measure' },
                { label: 'shot', value: 'measure' },
                { label: 'cubes', value: 'measure' },
                { label: 'cups', value: 'measure' },
              ]}
              value={clearValue}
              name="measure"
              onChange={handleIngredientsChange}
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
