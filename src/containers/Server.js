export function AddToLocalStorage(i){
    console.log('--запросы---')
    const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/'+i;

    fetch(reqURL,{mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(answ) {
        let obj=JSON.stringify(answ);
        let json = JSON.parse(obj);
        console.log(json);

        localStorage.setItem(json.id, obj)
    })
    .catch(e => console.log(e))
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