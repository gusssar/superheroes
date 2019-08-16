export const NEXT_PAGE = 'NEXT_PAGE';

export function NextPage(l) {
    return{
        type: NEXT_PAGE,
        playload: l,
    }
}