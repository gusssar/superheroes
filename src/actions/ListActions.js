export const SET_NUMBER_OF_HERO = 'SET_NUMBER_OF_HERO';

export function setNumberOfHero(number) {
    return{
        type: SET_NUMBER_OF_HERO,
        playload: number,
    }
}