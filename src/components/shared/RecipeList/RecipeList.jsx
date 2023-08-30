import { useState, useEffect } from 'react';
import RecipeListItem from './RecipeListItem/RecipeListItem';
import { getMyRecipes } from '../api/MyRecipes/MyRecipes';
import styles from './recipeList.module.scss';

const RecipeList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const { data } = await getMyRecipes();
        setItems(data);
      } catch ({ response }) {
        const errorMessage = response.data.message || 'Cannot fetch my recipes';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const elements = items.map(({ _id, ...props }) => (
    <RecipeListItem key={_id} {...props} />
  ));

  return (
    <>
      {loading && <p>....Loading</p>}
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.list}>{elements}</ul>;
    </>
  );
};
export default RecipeList;
