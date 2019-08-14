import React from 'react';
import superList from '../lib/heroesList.json'

export class Header extends React.Component{
    render(){
    

    
    //не больше 20-ти иначе сервер не справляется
    for(let i=1; i<5; i++){
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
        });
    }

        return(
            <div className='header'>
                ну привет
            </div>
        )
    }
}