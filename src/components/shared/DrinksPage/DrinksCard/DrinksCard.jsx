import styles from '../styles/DrinksPage.module.scss';
import { useSelector } from 'react-redux';
import { getDataRecipets } from '../redux/recipetsSlice';
import { Link } from 'react-router-dom';

const DrinksCard = () => {
  const dataRecipets = useSelector(getDataRecipets);
  console.log(dataRecipets);
  return (
    <ul className={styles.drinks_list}>
      {dataRecipets.cocktails.map(({ drink, drinkThumb, _id }) => (
        <li className={styles.drinks_item} key={_id}>
          <Link className={styles.drinks_link} to={`/recipe/${_id}`}>
            <div className={styles.drinks_card}>
              <img className={styles.drinks_img} src={drinkThumb} alt={drink} />
            </div>
            <h2 className={styles.drinks_title}>{drink}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksCard;
