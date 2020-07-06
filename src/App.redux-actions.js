
const DATA_REQUESTED = "DATA_REQUESTED";
const DATA_RECEIVED = "DATA_RECEIVED";
const DATA_FAILED = "DATA_FAILED";

const initialState = { photos: {}, basket: {}, status: '' };

export const getDataAction = () => {
    return function(dispatch) {
        dispatch({
            type: DATA_REQUESTED,
        });

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => dispatch({
                type: DATA_RECEIVED,
                payload: data
            }))
            .catch(error => dispatch({
                    type: DATA_FAILED,
                    payload: error
                })
            );
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUESTED:
            state = Object.assign({}, state, {status: "waiting"});
            break;
        case DATA_RECEIVED:
            state = Object.assign({}, state, {photos: [...action.payload], status: "received"});
            break;
        case DATA_FAILED:
            state = Object.assign({}, state, {status: "failed", error: action.payload});
            break;
    }

    return state;
};
