import React from 'react';
import classnames from 'clsx';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';

export const Navigation = ({ children, ...props }) => (
  <div
    className={
            classnames(
              'flexFluid',
              styles.nav,
            )
        }
    {...props}
  >
    {children}
  </div>
);

Navigation.propTypes = {
    children: PropTypes.string
};

export default Navigation;
