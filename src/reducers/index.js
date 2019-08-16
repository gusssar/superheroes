import { combineReducers } from 'redux';
import { displaylistReducer } from './list';
import { dataListReducer } from './datalist';
import { inputReducer } from './input';

//комбинируем всередьюсеры в сторе
export const rootReducer = combineReducers({
    displaylist: displaylistReducer,
    data: dataListReducer,
    input: inputReducer,
})