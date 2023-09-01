import { useDispatch } from 'react-redux';
import styles from '../MyRecipes/RecipeList/recipeList.module.scss';
import { deleteRecipes } from 'redux/recipes/recipes-operations';
const ButtonDelete = ({ id, type = 'submit', children }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteRecipes(id));
  return (
    <button
      onClick={() => handleDelete(id)}
      className={styles.delete}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonDelete;
