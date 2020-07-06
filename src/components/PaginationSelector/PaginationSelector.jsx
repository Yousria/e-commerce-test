import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import styles from './PaginationSelector.scss';
import { getDataAction } from '../../App.redux-actions';

export const PaginationSelector = () => {
    let pageLimit = useSelector(state => state.pageLimit);
    let dispatch = useDispatch();
    return (
        <FormControl variant='outlined' className={styles.formControl}>
            <InputLabel id="page-limit">{pageLimit}</InputLabel>
            <Select label={pageLimit} onChange={e => {
                dispatch({
                    type: 'SET_PAGE_LIMIT',
                    payload: e.target.value
                });
                dispatch(getDataAction());
            }}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
    )
};

export default PaginationSelector;
