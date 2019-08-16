export const INPUT_CHANGE = 'INPUT_CHANGE';

export function ChangeInput(value){
    return{
        type: INPUT_CHANGE,
        playload: value,
    }
}