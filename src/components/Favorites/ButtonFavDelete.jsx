// import styles from '../MyRecipes/RecipeList/recipeList.module.scss';
import styles from '../../components/shared/MyRecipes/RecipeList/recipeList.module.scss';

const ButtonFavDelete = ({ id, type = 'submit', onDeleteFavorites, children }) => {
  console.log(id)
  return (
    <button
      onClick={() => onDeleteFavorites(id)}
      className={styles.delete}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonFavDelete;