
import { NavLink } from "react-router-dom";

import React from "react";
import styles from './Navigation.module.scss';

const Navigation = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={styles.header__navigation}>
                <li><NavLink to={`/main`}><button className={styles.navigation__button}>Home</button></NavLink></li>
                <li><NavLink to={`/drinks`}><button className={styles.navigation__button}>Drinks</button></NavLink></li>
                <li><NavLink to={`/add`}><button className={styles.navigation__button}>Add recipe</button></NavLink></li>
                <li><NavLink to={`/my`}><button className={styles.navigation__button}>My recipes</button></NavLink></li>
                <li><NavLink to={`/favorite`}><button className={styles.navigation__button}>Favorites</button></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation