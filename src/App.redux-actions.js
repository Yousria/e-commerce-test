const DATA_REQUESTED = 'DATA_REQUESTED';
const DATA_RECEIVED = 'DATA_RECEIVED';
const DATA_FAILED = 'DATA_FAILED';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';
const SET_LAST_PAGE = 'SET_LAST_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const ADD_ITEM = 'ADD_ITEM';
const OPEN_BASKET = 'OPEN_BASKET';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SET_TOTAL = 'SET_TOTAL';
const SEARCH = 'SEARCH';

const initialState = {
  photos: [],
  basket: [],
  status: '',
  pageLimit: 15,
  currentPage: 1,
  lastPage: 0,
  openBasket: false,
  totalItems: 0,
  searchTerm: ''
};

export const getDataAction = () => function (dispatch, getState) {
  dispatch({
    type: DATA_REQUESTED,
  });

  let url = 'https://jsonplaceholder.typicode.com/photos?_page='+
      getState().currentPage +'&_limit=' + getState().pageLimit + (getState().searchTerm !== '' ? ('&q=' + getState().searchTerm) : '');
  fetch(url)
    .then((response) => {
      let linkHeader = response.headers.get('Link');
      let lastPage = linkHeader.substring(linkHeader.lastIndexOf('page=') + 5, linkHeader.lastIndexOf('&'));
      dispatch({
        type: SET_LAST_PAGE,
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
    case ADD_ITEM:
      return addItem(state, action);
      break;
    case OPEN_BASKET:
      state = { ...state, openBasket: action.payload};
      break;
    case SET_TOTAL:
      state = { ...state, totalItems: action.payload};
      break;
    case REMOVE_ITEM:
      return removeItem(state, action);
      break;
    case SEARCH:
      state = { ...state, searchTerm: action.payload};
      break;
  }

  return state;
};

const addItem = (state, action) => {
  let addedItem = state.basket.find(item => item.id === action.payload.id);
  if (addedItem) {
    addedItem.quantity += 1;
    return { ...state, totalItems: state.totalItems + 1 };
  } else {
    action.payload.quantity = 1;
    return { ...state, totalItems: state.totalItems + 1, basket: [...state.basket, action.payload]}
  }
};

const removeItem = (state, action) => {
  let itemToRemove = state.basket.find(item => item.id === action.payload.id);
  if (itemToRemove) {
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity -= 1;
      return { ...state, totalItems: state.totalItems - 1};
    } else {
      return { ...state, totalItems: state.totalItems - 1, basket: state.basket.filter(item => item.id !== action.payload.id)};
    }
  }
};
