import { 
    CHECK_FILTER,
    INPUT_SEARCH,
} from '../actions/InputActions';

export const initialState = {
    value: '',
    checkFilter: 'all',
}

export function inputReducer(state=initialState, action){
    switch (action.type) {
        case CHECK_FILTER:
            return {...state, checkFilter:action.playload}
        case INPUT_SEARCH:
            return {...state, value: action.playloader}
        default:
            return state
    }
}