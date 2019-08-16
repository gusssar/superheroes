const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/';

export function FastGetRequest(i,n,arr){
    const _arr=[...arr];

    for(i;i<=n;i++){
        fetch(reqURL+i,{mode:'cors'})
        .then(response=>response.json())
        .then(_json=> {
            if(_json.response==='success'){_arr.push(_json)}
        })
        .catch(error => console.error(error))
    }

    return _arr
}