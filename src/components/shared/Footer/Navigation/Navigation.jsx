import React from 'react';
import Nav from "./Nav/Nav";
import FollowUs from "./FollowUs/FollowUs";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

import css from "./Nav/Navigation.module.scss"

const Navigation = () => {
  return (
      <div className={css.navigation}>
        <div className={css.navigation_follow}>
          <div>
             <FollowUs/>
          </div>
             <Nav />
        </div>
             <SubscribeForm className={css.subscribeForm}/>
          </div>
     );
};

export default Navigation;
