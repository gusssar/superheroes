//надо добавить isomorphic-fetch в import
export const INITIALISATION = 'INITIALISATION';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

let arr = [];

const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';
//последовательный запрос (приходит всё упорядоченно)
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
                        // dispatch({
                        //     type: INITIALISATION,
                        // })
                    }
                })
}

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            FastGetRequest(i,n,dispatch);
            //ждём подгрузки данных 2 секунды
            setTimeout(()=>{
                dispatch({
                    type: REQUEST_SUCCESS,
                    playload: arr,
                })
                dispatch({
                    type: INITIALISATION,
                })
            },2000)
        }
}
//параллельный запрос (в разброс всё)
//надо сортировать
function FastGetRequest(i,n,dispatch){
    for(i;i<=n;i++){
        fetch(reqURL+i,{mode:'cors'})
        .then(response=>response.json())
        .then(_json=> {arr.push(_json)})
    }

}