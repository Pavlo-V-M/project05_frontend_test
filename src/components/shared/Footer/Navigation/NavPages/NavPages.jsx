import css from "./navigation.module.scss"
 const Nav = () => {
    return (
        <ul className={css.nav}>
          <li className={css.pages}> <a href="/drinks" className={css.link_pages}>Drinks</a></li>
          <li className={css.pages}><a href="/add" className={css.link_pages}>Add recipes</a></li>
          <li className={css.pages}><a href="/my" className={css.link_pages}>My recipes</a></li>
          <li className={css.pages}><a href="/favorite" className={css.link_pages}>Favorites</a></li>
        </ul>
    );
  };

  export default Nav;