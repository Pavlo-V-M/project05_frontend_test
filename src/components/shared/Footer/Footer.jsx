import React from 'react';
import Navigation from './Navigation/Navigation';
import Privacy from "./Privacy/Privacy"

import "../../../index.scss"

const Footer = () => {
  return (
    <div className="container">
      <Navigation />
      <Privacy />
    </div>
  );
};

export default Footer;
