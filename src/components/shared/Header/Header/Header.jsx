import React from "react";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import styles from "./Header.module.scss"
import UserInfoModal from "../UserInfoModal/UserInfoModal";


const Header = () => {
    return (
        
       <header className={styles.header}>
        <div className="container">
            <div className={styles.div__header}>
            <UserLogo/>
            <Navigation className={styles.hidden_navigation} /> 
            <div className={styles.div__header_position}>
             <UserInfoModal />
            <UserLogoModal />
            </div>
            </div>
            </div>
        </header>
    )
}
export default Header