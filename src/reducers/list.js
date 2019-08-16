//-
// import { SET_NUMBER_OF_HERO } from '../actions/ListActions';
// import { LOAD_LIST } from '../actions/ListActions';
import { NEXT_PAGE } from '../actions/ListActions';

export const initialState = {
    // download : false,
    // number: 4,
    viewLine: 4,

}

export function displaylistReducer(state = initialState, action){
    switch (action.type) {
        // case SET_NUMBER_OF_HERO:
        //     return {...state, number: action.playload }
        // case LOAD_LIST:
        //     return {...state, download: true}
        case NEXT_PAGE:
            return {...state, viewLine: state.viewLine + 4}
        default:
            return state
    }
}