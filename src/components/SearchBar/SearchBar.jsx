import React from 'react';
import {Paper, IconButton, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchBar.scss';
import {useDispatch} from 'react-redux';
import {getDataAction} from '../../App.redux-actions';

export const SearchBar = () => {
    let dispatch = useDispatch();
    return (
        <Paper component="form" className={styles.root}>
            <InputBase
                className={styles.input}
                placeholder="Search"
                onChange={e => {
                    dispatch({
                        type: 'SEARCH',
                        payload: e.target.value
                    });
                    dispatch(getDataAction());
                }}
            />
            <IconButton type="submit" className={styles.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
};

export default SearchBar;
