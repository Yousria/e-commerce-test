import React from 'react';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import {useSelector} from 'react-redux';
import styles from './Header.scss';

export const Header = () => {
    let basket = useSelector(state => state.basket);
    return (
        <div className={styles.header}>
            <Badge badgeContent={basket.length} color='secondary'>
                <IconButton>
                    <ShoppingBasketOutlined/>
                </IconButton>
            </Badge>
        </div>
    )
};

export default Header;
