import React from "react";
import styles from './UserLogo.module.scss'

const UserLogo = () => {
    return (
    <div className={styles.div__logo_header}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M15.2145 0H6.78555L0 6.78554V15.2144L6.78555 22H15.2145L22 15.2144V6.78554L15.2145 0ZM7.95181 15.3205L3.60483 10.9735L7.95181 6.62651C9.59518 4.98313 12.2988 4.98313 13.9422 6.62651L18.2892 10.9735L13.9422 15.3205C12.2988 16.9639 9.64819 16.9639 7.95181 15.3205Z" fill="white"/>
       </svg>
       <p>Drink Master</p>
    </div>
    )
}

export default UserLogo