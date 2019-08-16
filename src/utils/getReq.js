const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';

//параллельный запрос (в разброс всё)
//надо сортировать
export function FastGetRequest(i,n,arr){
    const _arr=[...arr];

    for(i;i<=n;i++){
        fetch(reqURL+i,{mode:'cors'})
        .then(response=>response.json())
        .then(_json=> {_arr.push(_json)})
    }

    return _arr
}

//последовательный запрос (приходит всё упорядоченно)
export function GetRequest(i,n,arr, dispatch){
        return fetch(reqURL+i,{mode:'cors'})
                .then(response =>response.json())
                .then(_json =>{
                    arr.push(_json);
                    if(i<n){
                        i++;
                        GetRequest(i,n,dispatch);
                    } else {
                        // dispatch({
                        //     type: REQUEST_SUCCESS,
                        //     playload: arr,
                        // })
                    }
                })
}