export const SET_NUMBER_OF_HERO = 'SET_NUMBER_OF_HERO';
export const LOAD_LIST= 'LOAD_LIST';
export const VIEW_LIST = 'VIEW_LIST';

export function setNumberOfHero(number) {
    return{
        type: SET_NUMBER_OF_HERO,
        playload: number,
    }
}

export function ViewList (value){
    return dispatch =>{
        setTimeout(()=>{dispatch(
            {
                type: VIEW_LIST,
                playload: value,
            }
        )},3000)
    }
}