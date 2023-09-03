import IngredientListItem from './IngredientListItem.jsx';
import css from './RecipePage.module.css';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid'

const IngredientList = ({ items = [] }) => {
    const elements = items.map(({ ...props }) => (
      <IngredientListItem 
        key ={nanoid()}
       {...props} />
    ));
    return <ul className={css.ingredient_list}>{elements}</ul>;
  };
  export default IngredientList;
