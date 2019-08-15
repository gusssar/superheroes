//надо добавить isomorphic-fetch в import
export const INITIALISATION = 'INITIALISATION';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

let arr = [];

const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';
function GetRequest(i,n,dispatch){
        return fetch(reqURL+i,{mode:'cors'})
                .then(response =>response.json())
                .then(_json =>{
                    arr.push(_json);
                    if(i<n){
                        console.log('---ифак тру---',i)
                        i++;
                        GetRequest(i,n,dispatch);
                    } else {
                        console.log('---ифак фолс---')
                        dispatch({
                            type: REQUEST_SUCCESS,
                            playload: arr,
                        })
                        dispatch({
                            type: INITIALISATION,
                        })
                    }
                })
}

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            GetRequest(i,n,dispatch)
    }
}