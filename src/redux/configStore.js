import {combineReducers, createStore} from 'redux';
import { gameXucXacReducer } from './reducer/xucXacReducer';

const rootReducer = combineReducers({
    gameXucXacReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 