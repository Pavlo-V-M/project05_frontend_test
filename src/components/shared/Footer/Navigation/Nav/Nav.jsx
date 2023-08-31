
import css from "./Navigation.module.scss"

//  const Nav = () => {
//     return (
//         <ul className={css.nav}>
//           <li> <a href="/drinks" className={css.link_pages}>Drinks</a></li>
//           <li><a href="/add" className={css.link_pages}>Add recipes</a></li>
//           <li><a href="/my" className={css.link_pages}>My recipes</a></li>
//           <li><a href="/favorite" className={css.link_pages}>Favorites</a></li>
//         </ul>
//     );
//   };

//   export default Nav;

  import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className={css.nav}>
      <li>
        <Link to="/main" className={css.link_pages} >Main</Link>
      </li>
      <li>
        <Link to="/drinks" className={css.link_pages} >Drinks</Link>
      </li>
      <li>
        <Link to="/add" className={css.link_pages} >Add Recipe</Link>
      </li>
      <li>
        <Link to="/my" className={css.link_pages} >My Recipes</Link>
      </li>
      <li>
        <Link to="/favorite" className={css.link_pages} >Favorites</Link>
      </li>
    </ul>
  );
};

export default Nav;