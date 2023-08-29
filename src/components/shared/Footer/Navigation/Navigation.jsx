import React from 'react';
import Nav from "./NavPages/NavPages";
import FollowUs from "./FollowUs/FollowUs";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

import css from "./NavPages/navigation.module.scss"

const Navigation = () => {
  return (
      <div className={css.navigation}>
        <div className={css.navigation_follow}>
          <FollowUs/>
          <Nav />
         </div>
          <SubscribeForm />
      </div>
  );
};

export default Navigation;
