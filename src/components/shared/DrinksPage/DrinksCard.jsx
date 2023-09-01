import styles from './DrinksPage.module.scss';
import { nanoid } from 'nanoid';

const DrinksCard = ({ currentItems }) => {
  // console.log(currentItems);

  return (
    <ul className={styles.drinks_list}>
      {currentItems.map(({ drink, drinkThumb }) => (
        <li className={styles.drinks_item} key={nanoid()}>
          <div className={styles.drinks_card}>
            <img className={styles.drinks_img} src={drinkThumb} alt={drink} />
          </div>
          <h2 className={styles.drinks_title}>{drink}</h2>
        </li>
      ))}
    </ul>
  );
};
export default DrinksCard;
