import React from 'react';
import classnames from 'clsx';
import styles from './Navigation.scss';

export const Navigation = ({children, ...props}) => {
    return (
        <div className={
            classnames(
                'flexFluid',
                styles.nav
            )
        }
             {...props}
        >
            {children}
        </div>
    )
};

export default Navigation;
