import React from 'react';
import Navigation from './Navigation/Navigation';
import Privacy from "./Privacy/Privacy"
import "index.scss"

const Footer = () => {
  return (
    
    <footer className="container">
      <Navigation />
      <Privacy />
    </footer>
  );
};

export default Footer;
