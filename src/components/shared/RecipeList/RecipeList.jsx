import RecipeListItem from './RecipeListItem/RecipeListItem';
import styles from './recipeList.module.scss';

const RecipeList = ({ items = [] }) => {
  const elements = items.map(({ _id, ...props }) => (
    <RecipeListItem key={_id} {...props} />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};
export default RecipeList;
