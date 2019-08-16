export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_SEARCH = 'INPUT_SEARCH';

export function ChangeInput(value){
    return{
        type: INPUT_CHANGE,
        playload: value,
    }
}

export function SearchInput(){
    return{
        type: INPUT_SEARCH,
    }
}