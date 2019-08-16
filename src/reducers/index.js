import { combineReducers } from 'redux';
import { listReducer } from './list';
import { dataListReducer } from './datalist';
import { inputReducer } from './input';

//комбинируем всередьюсеры в сторе
export const rootReducer = combineReducers({
    list: listReducer,//метод стора
    data: dataListReducer,
    input: inputReducer,
})