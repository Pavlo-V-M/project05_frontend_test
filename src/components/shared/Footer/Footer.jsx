import React from 'react';
import Navigation from './Navigation/Navigation';
import Privacy from "./Privacy/Privacy";
import "index.scss";
import css from "./Footer.module.scss"; 
import Container from './Container.jsx';


const Footer = () => {
  return (
    <footer className={css.footer}> 
      <Container>
        <Navigation /> 
        <Privacy />
      </Container>
      {/* <div className={css.gradient}>
        <div className={css.bubble1}></div>
        <div className={css.bubble2}></div>
        </div> */}
    </footer>
  );
};

export default Footer;
