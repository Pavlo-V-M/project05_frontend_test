import React from 'react';
import Navigation from './Navigation/Navigation';
import Privacy from "./Privacy/Privacy";
import "index.scss";
import css from "./footer.module.scss"; 
import Container from './Container.jsx';


const Footer = () => {
  return (
    <footer > 
      <Container className={css.footer}>
        <Navigation /> 
        <Privacy />
      </Container>
    </footer>
  );
};

export default Footer;
