const DATA_REQUESTED = 'DATA_REQUESTED';
const DATA_RECEIVED = 'DATA_RECEIVED';
const DATA_FAILED = 'DATA_FAILED';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';
const SET_LAST_PAGE = 'SET_LAST_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

const initialState = {
  photos: {}, basket: {}, status: '', pageLimit: 15, currentPage: 1, lastPage: 0
};

export const getDataAction = () => function (dispatch, getState) {
  dispatch({
    type: DATA_REQUESTED,
  });

  let url = 'https://jsonplaceholder.typicode.com/photos?_page='+ getState().currentPage +'&_limit=' + getState().pageLimit;
  fetch(url)
    .then((response) => {
      let linkHeader = response.headers.get('Link');
      let lastPage = linkHeader.substring(linkHeader.lastIndexOf('page=') + 5, linkHeader.lastIndexOf('&'));
      dispatch({
        type: 'SET_LAST_PAGE',
        payload: Number(lastPage)
      });
      return response.json();
    })
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
      state = { ...state, currentPage: state.currentPage + 1};
      break;
    case PREVIOUS_PAGE:
      state = { ...state, currentPage: state.currentPage - 1};
      break;
    case SET_PAGE_LIMIT:
      state = { ...state, pageLimit: action.payload };
      break;
    case SET_LAST_PAGE:
      state = { ...state, lastPage: action.payload };
      break;
    case SET_CURRENT_PAGE:
      state = { ...state, currentPage: action.payload};
      break;
  }

  return state;
};
