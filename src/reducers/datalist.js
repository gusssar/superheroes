import { 
    START_LOAD_LIST,
    FINISH_LOAD_LIST,
} from '../actions/DataListActions';

//инициализируем начальное состояние
export const initialState = {
    data : {},
    isFetching: false,
}

//обновление state редьюсером в зависимости от экшена
export function dataListReducer(state = initialState, action){
    switch (action.type) {
        case START_LOAD_LIST:
            return { ...state, isFetching: true }
        case FINISH_LOAD_LIST:
            return {...state, data:action.playload, isFetching: false }
        default:
            return state
    }
}