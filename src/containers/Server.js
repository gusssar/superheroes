//-
export function AddToLocalStorage(i){
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

        // localStorage.setItem(json.id, obj)
        obj[_json.id]=obj;
    })
    .catch(e => console.log(e))
    return obj;
}

export default function MakeReq(i=1, n=5){
    //не больше 20-ти иначе сервер не справляется
    for(i; i<n; i++){
        //ограничение запросов
        if(!localStorage.getItem(i)){
            AddToLocalStorage(i)
        }
    }
}