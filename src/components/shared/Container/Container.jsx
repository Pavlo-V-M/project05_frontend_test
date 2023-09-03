import { PropTypes } from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;