// import { AddToLocalStorage } from '../containers/Server';

export const START_LOAD_LIST = 'START_LOAD_LIST';
export const FINISH_LOAD_LIST = 'FINISH_LOAD_LIST';

function GetRequest(i){
    console.log('--запросы---')
    const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/'+i;

    const obj={};
    fetch(reqURL,{mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(_answ) {
        let _obj=JSON.stringify(_answ);
        let _json = JSON.parse(_obj);
            console.log(_json);
        obj[_json.id]=obj;
    })
    .catch(e => console.log(e))
    return obj;
}

function GetMoreRequest(i=1,n=2){
    const data={};
    for(i; i<n; i++){
        let _data = GetRequest(i);
        data[_data.id] = _data;
    }
    // dispatch({
    //     type: FINISH_LOAD_LIST,
    //     playload: data
    // })
}

export function GetDataList(){
    //не больше 20-ти иначе сервер не справляется
    console.log('--а был ли мальчик?--');
    return dispatch => {
        dispatch({
            type: START_LOAD_LIST,
        })
        // GetMoreRequest(dispatch)
        setTimeout(()=>{
            dispatch({
                    type: FINISH_LOAD_LIST,
                    playload: {lala:'jopa'}
                })}, 2000)
    }

}

// function StartLoad(){
//     return {
//         type: START_LOAD_LIST,
//     }
// }

// function FinishLoad(data){
//     return{
//         type:FINISH_LOAD_LIST,
//         playload: data,
//     }
// }