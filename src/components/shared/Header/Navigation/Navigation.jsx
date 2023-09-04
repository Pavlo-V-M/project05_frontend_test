import { Link, useLocation } from "react-router-dom";

import React from "react";
import styles from './Navigation.module.scss';

const Navigation = ({ className }) => {
    const location = useLocation()
    return (
        <nav className={className}>
            <ul className={styles.header__navigation}>
                <li className={location.pathname === "/main" ? styles.active : ""}><Link to={`/main`} ><button className={styles.navigation__button}>Home</button></Link></li>
                <li className={location.pathname === "/drinks" ? styles.active : ""}><Link to={`/drinks`} ><button className={styles.navigation__button}>Drinks</button></Link></li>
                <li className={location.pathname === "/add" ? styles.active : ""}><Link to={`/add`} ><button className={styles.navigation__button}>Add recipe</button></Link></li>
                <li className={location.pathname === "/my" ? styles.active : ""}><Link to={`/my`} ><button className={styles.navigation__button}>My recipes</button></Link></li>
                <li className={location.pathname === "/favorite" ? styles.active : ""}><Link to={`/favorite`} ><button className={styles.navigation__button}>Favorites</button></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation