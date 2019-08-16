//надо добавить isomorphic-fetch в import
import { FastGetRequest } from '../utils/getReq';

export const INITIALISATION = 'INITIALISATION';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

let arr = [];

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            let _arr=FastGetRequest(i,n,arr);
            //ждём подгрузки данных 2 секунды
            setTimeout(()=>{
                dispatch({
                    type: REQUEST_SUCCESS,
                    playload: _arr,
                })
                dispatch({
                    type: INITIALISATION,
                })
            },2000)
        }
}