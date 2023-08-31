import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { fetchCategories } from "components/services/Api";
import styles from './CategoryListPrewiew.module.scss'
// import CategoryCard from "./CategoryCard";

const CategoryListPrewiew = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {

   const fetchCategoriesList = () => {

            fetchCategories().then(category => {
                setCategories(category);
            })
                .catch(error => {
                    console.log(error);
                })
        };
    fetchCategoriesList();
  }, []);


    console.log(categories)
  const categoriesKeys = Object.keys(categories);
  console.log(categoriesKeys); 
  
  const odinaryDrinks = categories["Odinary Drink"];  
  // console.log(odinaryDrinks)
  const coctails = categories['Cocktail'];
  // console.log(coctails)
  const shakes = categories["Shake"]
// console.log(shakes)
  const other = categories["Other/Unknown"]
  


return (
      <div>
        <ul>
              <li>
                <h2>{categoriesKeys[0]}</h2>
                <ul className={styles.coctail_list}>{odinaryDrinks.map(({ _id, drinkThumb, drink}) => {
                    return (
                      <li key={_id}>
                        <img src={drinkThumb} alt="Odinary Drink" />
                        <h2>{drink}</h2>
                        <p>ingredients</p>
                      </li>)
              })}</ul>
      </li>
                    <li>
                <h2>{categoriesKeys[1]}</h2>
                <ul className={styles.coctail_list}>{coctails.map(({ _id, drinkThumb, drink}) => {
                    return (
                      <li key={_id}>
                        <img src={drinkThumb} alt='Cocktail' />
                        <h2>{drink}</h2>
                        <p>ingredients</p>
                      </li>)
              })}</ul>
      </li>
                    <li>
                <h2>{categoriesKeys[2]}</h2>
                <ul className={styles.coctail_list}>{shakes.map(({ _id, drinkThumb, drink}) => {
                    return (
                      <li key={_id}>
                        <img src={drinkThumb} alt="Shake" />
                        <h2>{drink}</h2>
                        <p>ingredients</p>
                      </li>)
              })}</ul>
      </li>
                    <li>
                <h2>{categoriesKeys[3]}</h2>
                <ul className={styles.coctail_list}>{other.map(({ _id, drinkThumb, drink}) => {
                    return (
                      <li key={_id}>
                        <img src={drinkThumb} alt="Other/Unknown" />
                        <h2>{drink}</h2>
                        <p>ingredients</p>
                      </li>)
              })}</ul>
              </li>
        </ul>
      </div>
)

//   return (
//       <div>
//         <ul>
//           {categoriesKeys.map((category) => {
//             return (
//               <li key={category}>
//                 <h2>{category}</h2>
//                 <ul className={styles.coctail_list}>{coctails.map(({ _id, drinkThumb, drink}) => {
//                     return (
//                       <li key={_id}>
//                         <img src={drinkThumb} alt="coctail" />
//                         <h2>{drink}</h2>
//                         <p>ingredients</p>
//                       </li>)
//               })}</ul>
//               </li>)
//         })}
//         </ul>
//       </div>
// )
};


export default CategoryListPrewiew;

      // <Link to={`${coctail._id}`}>
      //     <img src={coctail.drinkThumb} alt="coctail" />
      //     <h2>{coctail.drink}</h2>
      //     <p>ingredients</p>
      // </Link>

      // <img src={drinkThumb} alt="coctails" />
      //                   <h2>{drink}</h2>
      //                   <p>ingredients</p>
