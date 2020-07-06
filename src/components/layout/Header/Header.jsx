import React from 'react';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

export const Header = () => {
    return (
        <React.Fragment>
            <IconButton><ShoppingBasketOutlined/></IconButton>
        </React.Fragment>
    )
};

export default Header;
