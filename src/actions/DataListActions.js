// import { AddToLocalStorage } from '../containers/Server';
//надо добавить isomorphic-fetch в import

export const START_LOAD_LIST = 'START_LOAD_LIST';
export const FINISH_LOAD_LIST = 'FINISH_LOAD_LIST';

function GetRequest(i){
    // console.log('--запросы---')
    const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';
    const obj={};
    fetch(reqURL+i,{mode:'cors'})
        .then(response =>response.json())
        .then(_answ =>{
            console.log(_answ)
            this._obj[_answ.id]=_answ;
        })
    return obj;
}

function GetMoreRequest(i=1,n=2){
    const data={};
    for(i; i<n; i++){
        let _data = GetRequest(i);
        data[_data.id] = _data;
    }
}

export function GetDataList(i=2){
    //не больше 20-ти иначе сервер не справляется
    let _obj={}
    const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';
    return dispatch => {
        dispatch({
            type: START_LOAD_LIST,
        })
        // GetMoreRequest(dispatch)
        return fetch(reqURL+i,{mode:'cors'})
        .then(response =>response.json())
        .then(_answ =>{
            console.log(_answ)
            _obj[_answ.id]=_answ;
            dispatch({
                type: FINISH_LOAD_LIST,
                playload: _obj
            })
        })
    }
}