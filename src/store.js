import { 
    createStore, 
    applyMiddleware, 
} from 'redux';

import thunk from 'redux-thunk';

import MainReducer from './MainReducer';

const middlewares = [thunk];


const store = 
    createStore(
        MainReducer, 
        applyMiddleware(...middlewares)
    );

export default store;