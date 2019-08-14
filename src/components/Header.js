import React from 'react'

export class Header extends React.Component{
    render(){
    const reqURL = 'https://www.superheroapi.com/api.php/2304427089625919/664';

    fetch(reqURL,{mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(answ) {
        let json = JSON.parse(JSON.stringify(answ));
        console.log(json);
    });


        return(
            <div className='header'>
                ну привет
            </div>
        )
    }
}