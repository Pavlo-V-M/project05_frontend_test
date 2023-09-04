import "index.scss";
import css from "./footer.module.scss"; 

const Container = ({ children }) => {
  return <div className={css.footer}>{children}</div>;
};

export default Container;