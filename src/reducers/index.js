import { combineReducers } from 'redux';
import { listReducer } from './list';

export const rootReducer = combineReducers({
    list: listReducer,//метод стора
})