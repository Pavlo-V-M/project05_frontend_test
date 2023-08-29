import React from "react";
import styles from './Navigation.module.scss';




const Navigation = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={styles.header__navigation}>
                <li><button className={styles.navigation__button}>Home</button></li>
                <li><button className={styles.navigation__button}>Drinks</button></li>
                <li><button className={styles.navigation__button}>Add recipe</button></li>
                <li><button className={styles.navigation__button}>My recipes</button></li>
                <li><button className={styles.navigation__button}>Favorites</button></li>
            </ul>
        </nav>
    )
}

export default Navigation