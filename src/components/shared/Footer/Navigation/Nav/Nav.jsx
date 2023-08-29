
import css from "./Navigation.module.scss"

 const Nav = () => {
    return (
        <ul className={css.nav}>
          <li> <a href="/drinks" className={css.link_pages}>Drinks</a></li>
          <li><a href="/add" className={css.link_pages}>Add recipes</a></li>
          <li><a href="/my" className={css.link_pages}>My recipes</a></li>
          <li><a href="/favorite" className={css.link_pages}>Favorites</a></li>
        </ul>
    );
  };

  export default Nav;

//   import { Link } from "react-router-dom";

// const Nav = () => {
//   return <nav className={css.navigate}>
//   <Link to="/drinks/:categoryName">Drinks</Link>
//   <Link to="/add">Add recipes</Link>
//   <Link to="/my">My recipes</Link>
//   <Link to="/favorite">Favorites</Link>
// </nav>
// };

// export default Nav;