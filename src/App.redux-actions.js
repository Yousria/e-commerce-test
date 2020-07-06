const DATA_REQUESTED = 'DATA_REQUESTED';
const DATA_RECEIVED = 'DATA_RECEIVED';
const DATA_FAILED = 'DATA_FAILED';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';

const initialState = {
  photos: {}, basket: {}, status: '', pageLimit: 15, currentPage: 1
};

export const getDataAction = () => function (dispatch, getState) {
  dispatch({
    type: DATA_REQUESTED,
  });

  fetch('https://jsonplaceholder.typicode.com/photos?_page='+ getState().currentPage +'&_limit=' + getState().pageLimit)
    .then((response) => response.json())
    .then((data) => dispatch({
      type: DATA_RECEIVED,
      payload: data,
    }))
    .catch((error) => dispatch({
      type: DATA_FAILED,
      payload: error,
    }));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUESTED:
      state = { ...state, status: 'waiting' };
      break;
    case DATA_RECEIVED:
      state = { ...state, photos: [...action.payload], status: 'received' };
      break;
    case DATA_FAILED:
      state = { ...state, status: 'failed', error: action.payload };
      break;
    case NEXT_PAGE:
      state = { ...state, currentPage: state.currentPage++};
      break;
    case SET_PAGE_LIMIT:
      state = { ...state, pageLimit: action.payload };
      break;
  }

  return state;
};
