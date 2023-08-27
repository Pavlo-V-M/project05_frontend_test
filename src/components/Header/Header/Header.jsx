import React from "react";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import styles from "./Header.module.scss"
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import DropDown from "../DropDown/DropDown";

const Header = () => {
    return (
        <div className={styles.div__header}>
            <UserLogo/>
            <Navigation className={styles.hidden_navigation} /> 
            <UserInfoModal/>
            <UserLogoModal />
            
        </div>
    )
}
export default Header