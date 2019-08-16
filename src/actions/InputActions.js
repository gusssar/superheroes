export const CHECK_FILTER = 'CHECK_FILTER';
export const INPUT_SEARCH = 'INPUT_SEARCH';
// export const VIEW_LIST = 'VIEW_LIST';

export function CheckFilter(key){
    return dispatch => {
        dispatch({
        type: CHECK_FILTER,
        playload: key,
        })
    }
}

export function SearchInput(value){
    return dispatch => {
        dispatch({
            type: INPUT_SEARCH,
            playloader: value,
        })
    }
}

// export function ViewList(value){
//     return{
//         type: VIEW_LIST,
//         playload: value
//     }
// }