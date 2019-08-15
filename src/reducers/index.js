import { combineReducers } from 'redux';
import { listReducer } from './list';
import { dataListReducer } from './datalist';

//комбинируем всередьюсеры в сторе
export const rootReducer = combineReducers({
    list: listReducer,//метод стора
    data: dataListReducer,
})