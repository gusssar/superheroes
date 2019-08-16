import { NEXT_PAGE } from '../actions/ListActions';

export const initialState = {
    viewLine: 12,
}

export function displaylistReducer(state = initialState, action){
    const next = 12; //увеличиваем на 12 пунктов при нажатии на кнопку
    switch (action.type) {
        case NEXT_PAGE:
            if(action.playload-state.viewLine <= next){
                return {...state, viewLine: action.playload}
            } else{
                return {...state, viewLine: state.viewLine + next}
            }
        default:
            return state
    }
}