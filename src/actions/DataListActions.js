//надо добавить isomorphic-fetch в import
import { FastGetRequest } from '../utils/getReq';

export const INITIALISATION = 'INITIALISATION';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const RETRY_REQUEST = 'RETRY_REQUEST';

let arr = [];

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            let _arr=FastGetRequest(i,n,arr);
            //ждём подгрузки данных 3 секунды
            setTimeout(()=>{
                dispatch({
                    type: REQUEST_SUCCESS,
                    playload: _arr,
                })
                dispatch({
                    type: INITIALISATION,
                })
            },3000);
            setTimeout(()=>
            setInterval(()=>{
                dispatch({
                    type: RETRY_REQUEST,
                    playload: _arr,
                })
            },3000),3000)
        }
}