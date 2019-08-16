import { 
    INPUT_CHANGE
} from '../actions/InputActions';

export const initialState = {
    value: '',
}

export function inputReducer(state=initialState, action){
    switch (action.type) {
        case INPUT_CHANGE:
            return {...state, value:action.playload}
        default:
            return state
    }
}