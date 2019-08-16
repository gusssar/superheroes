import { 
    INITIALISATION,
    SEND_REQUEST,
    REQUEST_SUCCESS,
    RETRY_REQUEST,
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
            return {...state}
        case SEND_REQUEST:
            return { ...state, isFetching: true }
        case REQUEST_SUCCESS:
            return {...state, data:state.data.concat(action.playload), isFetching: false, isInit: false }
        case RETRY_REQUEST:
            return {...state, data:action.playload}
        default:
            return state
    }
}