export const CHECK_FILTER = 'CHECK_FILTER';
export const INPUT_SEARCH = 'INPUT_SEARCH';

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