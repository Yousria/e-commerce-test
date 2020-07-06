import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { FirstPage, LastPage, ChevronLeft, ChevronRight } from '@material-ui/icons';
import { getDataAction } from '../../App.redux-actions';

export const PageSelector = () => {
    let { currentPage, lastPage } = useSelector(state => ({
        currentPage: state.currentPage,
        lastPage: state.lastPage
    }));
    let dispatch = useDispatch();
    return (
        <React.Fragment>
            <IconButton onClick={() => {
                dispatch({type: 'SET_CURRENT_PAGE', payload: lastPage});
                dispatch(getDataAction());
            }}
                disabled={lastPage === currentPage}>
                <LastPage/>
            </IconButton>
            <IconButton onClick={() => {
                dispatch({type: 'NEXT_PAGE'});
                dispatch(getDataAction());
            }}>
                <ChevronRight/>
            </IconButton>
            <IconButton onClick={() => {
                dispatch({type: 'PREVIOUS_PAGE'});
                dispatch(getDataAction());
            }}
                disabled={currentPage === 1}>
                <ChevronLeft/>
            </IconButton>
            <IconButton disabled={currentPage === 1}
                        onClick={() => {
                            dispatch({
                                type: 'SET_CURRENT_PAGE',
                                payload: 1
                            });
                            dispatch(getDataAction());
                        }}>
                <FirstPage/>
            </IconButton>
        </React.Fragment>
    )
};

export default PageSelector;
