import { SET_NUMBER_OF_HERO } from '../actions/ListActions';

export const initialState = {
    download : true,
    number: 4,
}

export function listReducer(state = initialState, action){
    switch (action.type) {
        case SET_NUMBER_OF_HERO:
            return {...state, number: action.playload }
        default:
            return state
    }
}