import React from 'react';
import {ShoppingBasketOutlined, RemoveCircle} from '@material-ui/icons';
import {IconButton, Badge, Drawer, Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Header.scss';
import SearchBar from '../../SearchBar';

export const Header = () => {
    let dispatch = useDispatch();

    let {basket, openBasket, totalItems} = useSelector(state => ({
        basket: state.basket,
        openBasket: state.openBasket,
        totalItems: state.totalItems
    }));

    return (
        <div className={styles.header}>
            <SearchBar/>
            <Badge badgeContent={totalItems} color='secondary'>
                <IconButton onClick={() => dispatch({type: 'OPEN_BASKET', payload: true})} disabled={totalItems === 0}>
                    <ShoppingBasketOutlined/>
                </IconButton>
            </Badge>
            <Drawer anchor='right' open={openBasket} onClose={() => dispatch({type: 'OPEN_BASKET', payload: false})}>
                <div className={styles.drawerHeader}>
                    <div className={styles.typo}>
                        <Typography align='center'>Panier</Typography>
                    </div>
                </div>
                <div className={styles.drawer}>
                    {basket.map(item => {
                        return (
                            <Card key={item.id} className={styles.basket}>
                                <CardMedia image={item.thumbnailUrl} className={styles.media}/>
                                <CardContent className={styles.cardContent}>
                                    <Typography>
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        {'X ' + item.quantity}
                                    </Typography>
                                </CardContent>
                                <IconButton onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item})}>
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
