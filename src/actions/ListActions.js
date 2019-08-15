export const SET_NUMBER_OF_HERO = 'SET_NUMBER_OF_HERO';
export const LOAD_LIST= 'LOAD_LIST';

export function setNumberOfHero(number) {
    return{
        type: SET_NUMBER_OF_HERO,
        playload: number,
    }
}

export function LoadList (){
    return{
        type: LOAD_LIST,
    }
}