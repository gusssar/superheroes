export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_SEARCH = 'INPUT_SEARCH';
// export const VIEW_LIST = 'VIEW_LIST';

// export function ChangeInput(value){
//     return{
//         type: INPUT_CHANGE,
//         playload: value,
//     }
// }

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