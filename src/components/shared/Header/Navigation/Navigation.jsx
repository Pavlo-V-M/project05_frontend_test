
import { Link } from "react-router-dom";

import React from "react";
import styles from './Navigation.module.scss';

const Navigation = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={styles.header__navigation}>
                <li><Link to={`/main`}><button className={styles.navigation__button}>Home</button></Link></li>
                <li><Link to={`/drinks`}><button className={styles.navigation__button}>Drinks</button></Link></li>
                <li><Link to={`/add`}><button className={styles.navigation__button}>Add recipe</button></Link></li>
                <li><Link to={`/my`}><button className={styles.navigation__button}>My recipes</button></Link></li>
                <li><Link to={`/favorite`}><button className={styles.navigation__button}>Favorites</button></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation