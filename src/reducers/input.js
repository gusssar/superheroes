import { 
    INPUT_CHANGE,
    INPUT_SEARCH,
} from '../actions/InputActions';

export const initialState = {
    value: '',
}

export function inputReducer(state=initialState, action){
    switch (action.type) {
        case INPUT_CHANGE:
            return {...state, value:action.playload}
        case INPUT_SEARCH:
            return {...state, value:''}
        default:
            return state
    }
}