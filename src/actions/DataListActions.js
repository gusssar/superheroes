// import { AddToLocalStorage } from '../containers/Server';
//надо добавить isomorphic-fetch в import

export const START_LOAD_LIST = 'START_LOAD_LIST';
export const FINISH_LOAD_LIST = 'FINISH_LOAD_LIST';

let cached = false;
let arr = [];

const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';
function GetRequest(i,n,dispatch){
        return fetch(reqURL+i,{mode:'cors'})
                .then(response =>response.json())
                .then(_json =>{
                    arr.push(_json);
                    if(i<=n){
                        console.log('---ифак тру---',i)
                        i++;
                        GetRequest(i,n,dispatch);
                    } else {
                        console.log('---ифак фолс---')
                        cached=true;
                        dispatch({
                            type: FINISH_LOAD_LIST,
                            playload: arr,
                        })
                    }
                })
}

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: START_LOAD_LIST,
        })

        if(cached){
            //здесь здесь отрендерим
            dispatch({
                type: FINISH_LOAD_LIST,
                playload: arr
            })
        } else {
            //запускаем опросник
            GetRequest(i,n,dispatch)
        }
    }
}