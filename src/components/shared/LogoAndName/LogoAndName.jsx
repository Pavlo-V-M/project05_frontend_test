import React from 'react';  
import css from './logoAndName.module.scss';

import {ReactComponent as SiteLogo} from "./logo.svg";

const LogoAndName = () => {
    return (
        <a className={css.link} href="/">
          <SiteLogo className={css.logoImg} />
          <p className={css.logoText}>Drink Master</p>
        </a>
    )
}

export default LogoAndName;
