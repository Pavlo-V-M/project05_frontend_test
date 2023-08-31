
import { Link } from "react-router-dom";

import css from "./navigation.module.scss"
 const Nav = () => {
    return (
        <ul className={css.nav}>
          <li className={css.pages}><Link to={`/drinks`} className={css.link_pages}>Drinks</Link></li>
          <li className={css.pages}><Link to={`/add`} className={css.link_pages}>Add recipes</Link></li>
          <li className={css.pages}><Link to={`/my`} className={css.link_pages}>My recipes</Link></li>
          <li className={css.pages}><Link to={`/favorite`} className={css.link_pages}>Favorites</Link></li>
        </ul>
    );
  };

  export default Nav;