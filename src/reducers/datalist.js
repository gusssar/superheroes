import { 
    INITIALISATION,
    SEND_REQUEST,
    REQUEST_SUCCESS,
} from '../actions/DataListActions';

//инициализируем начальное состояние
export const initialState = {
    data : [],
    isFetching: false,
    isInit: true,
}

//обновление state редьюсером в зависимости от экшена
export function dataListReducer(state = initialState, action){
    switch (action.type) {
        case INITIALISATION:
            return {...state, isInit: false}
        case SEND_REQUEST:
            return { ...state, isFetching: true }
        case REQUEST_SUCCESS:
            return {...state, data:action.playload, isFetching: false, isInit: false }
        default:
            return state
    }
}