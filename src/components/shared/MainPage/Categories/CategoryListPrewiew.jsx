import { useState, useEffect } from "react";
import { fetchCategories } from "components/services/Api";
import styles from './CategoryListPrewiew.module.scss'
import { Link, useLocation } from "react-router-dom";

const CategoryListPrewiew = () => {
  const [categories, setCategories] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  

  useEffect(() => {

    const fetchCategoriesList = () => {
      // setIsLoading(true);
      fetchCategories().then(data => {
        setCategories(data);
            })
                .catch(error => {
                    console.log(error);
                })
        // .finally(() => { setIsLoading(false) });
    };
    fetchCategoriesList();
  },[]);

  const categoriesKeys = Object.keys(categories);
  const [odinary, cocktail, shake, other] = categoriesKeys;

  const odinaryList = categories["Odinary Drink"];  
  const cocktailList = categories['Cocktail'];
  const shakeList = categories["Shake"]
  const otherList = categories["Other/Unknown"]
  
  return (
    <div>
      <ul>
        <li className={styles.category}>
          <Link className={styles.link} to={`/recipes/${odinary}`}>
            <h2 className={styles.category_title}>{odinary}</h2>
          </Link>
          <ul className={styles.coctail_list} >{odinaryList && odinaryList.map(({ _id, drinkThumb, drink }) => {
            return (
              <Link className={styles.link} key={_id} to={`/recipe/${_id}`} state={{ from: location }} >
                <li className={styles.card}>
                  <img className={styles.img} src={drinkThumb} width="400" alt="Odinary Drink" />
                  <div className={styles.card_info}>
                    <h2 className={styles.card_title}>{drink}</h2>
                    <p className={styles.card_text}>ingredients</p>
                  </div>
                </li>
              </Link>)
          })}
          </ul>
        </li>
        <li className={styles.category}>
          <Link className={styles.link} to={`/recipes/${cocktail}`}>
            <h2 className={styles.category_title}>{cocktail}</h2>
          </Link>
          <ul className={styles.coctail_list} >{cocktailList && cocktailList.map(({ _id, drinkThumb, drink }) => {
            return (
              <Link className={styles.link} key={_id} to={`/recipe/${_id}`} state={{ from: location }} >
                <li className={styles.card}>
                  <img className={styles.img} src={drinkThumb} max-width="400" alt="Cocktail" />
                  <div className={styles.card_info}>
                    <h2 className={styles.card_title}>{drink}</h2>
                    <p className={styles.card_text}>ingredients</p>
                  </div>
                </li>
              </Link>)
          })}
          </ul>
        </li>
        <li className={styles.category}>
          <Link className={styles.link} to={`/recipes/${shake}`}><h2 className={styles.category_title}>{shake}</h2></Link>
          <ul className={styles.coctail_list} >{shakeList && shakeList.map(({ _id, drinkThumb, drink }) => {
            return (
              <Link className={styles.link} key={_id} to={`/recipe/${_id}`} state={{ from: location }} >
                <li className={styles.card}>
                  <img className={styles.img} src={drinkThumb} width="400" alt="Shake" />
                  <div className={styles.card_info}>
                    <h2 className={styles.card_title}>{drink}</h2>
                    <p className={styles.card_text}>ingredients</p>
                  </div>
                </li>
              </Link>)
          })}
          </ul>
        </li>
        <li className={styles.category}>
          <Link className={styles.link} to={`/recipes/${other}`}><h2 className={styles.category_title}>{other}</h2></Link>
          <ul className={styles.coctail_list} >{otherList && otherList.map(({ _id, drinkThumb, drink }) => {
            return (
              <Link className={styles.link} key={_id} to={`/recipe/${_id}`} state={{ from: location }} >
                <li className={styles.card}>
                  <img className={styles.img} src={drinkThumb} width="400" alt="Other" />
                  <div className={styles.card_info}>
                    <h2 className={styles.card_title}>{drink}</h2>
                    <p className={styles.card_text}>ingredients</p>
                  </div>
                </li>
              </Link>)
          })}
          </ul>
        </li>
      </ul>
    </div>
)
};

export default CategoryListPrewiew;
