import React from 'react';
import {ShoppingBasketOutlined, RemoveCircle} from '@material-ui/icons';
import {IconButton, Badge, Drawer, Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Header.scss';

export const Header = () => {
    let dispatch = useDispatch();

    let {basket, openBasket} = useSelector(state => ({
        basket: state.basket,
        openBasket: state.openBasket
    }));

    return (
        <div className={styles.header}>
            <Badge badgeContent={basket.length} color='secondary'>
                <IconButton onClick={() => dispatch({type: 'OPEN_BASKET', payload: true})}>
                    <ShoppingBasketOutlined/>
                </IconButton>
            </Badge>
            <Drawer anchor='right' open={openBasket} onClose={() => dispatch({type: 'OPEN_BASKET', payload: false})}>
                <Typography align='center' color='secondary'>Panier</Typography>
                <div className={styles.drawer}>
                    {basket.map(item => {
                        return (
                            <Card key={item.id} className={styles.basket}>
                                <CardMedia image={item.thumbnailUrl} className={styles.media}/>
                                <CardContent>
                                    <Typography>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <IconButton onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item.id})}>
                                    <RemoveCircle/>
                                </IconButton>
                            </Card>
                        )
                    })}
                </div>
            </Drawer>
        </div>
    )
};

export default Header;
