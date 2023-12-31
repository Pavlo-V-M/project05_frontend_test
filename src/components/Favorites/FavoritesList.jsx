import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';
import ButtonFavDelete from './ButtonFavDelete';
import { getMyFavorites } from "redux/favoriteCocktails/favorites-selectors";
import { fetchFavorites, deleteFavorites } from 'redux/favoriteCocktails/favorites-operations';
import styles from '../shared/MyRecipes/RecipeList/recipeList.module.scss';

const FavoritesList = () => {
    const items = useSelector(getMyFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavorites());
    }, [dispatch]);
    const onDeleteFavorites = _id => {
        dispatch(deleteFavorites(_id));
      };

    const elements = items &&
    items.map(({ _id, drinkThumb, drink, describe }) => (
        <li key={_id} className={styles.item}>
          <img src={drinkThumb} alt="cocktail" className={styles.picture}></img>
          <h2 className={styles.coctailName}>{drink} </h2>
          <p className={styles.text}>ingredients</p>
          <p className={styles.description}>{describe}</p>
          <div className={styles.btns}>
            <Link className={styles.btn} to={`/recipe/${_id}`}>
              See recipe
            </Link>
            <ButtonFavDelete id={_id} onDeleteFavorites={onDeleteFavorites}>
              <RiDeleteBin6Line className={styles.iconDelete} />
            </ButtonFavDelete>
          </div>
        </li>
      ));
return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default FavoritesList;

