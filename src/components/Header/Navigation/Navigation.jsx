import React from "react";
import styles from './Navigation.module.scss';


const Navigation = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={styles.header__navigation}>
                <li className={styles["header-navigation__item"]}>Home</li>
                <li  className={styles["header-navigation__item"]}>Drinks</li>
                <li  className={styles["header-navigation__item"]}>Add recipe</li>
                <li  className={styles["header-navigation__item"]}>My recipes</li>
                <li  className={styles["header-navigation__item"]}>Favorites</li>
            </ul>
        </nav>
    )
}

export default Navigation