import React from 'react';
import { Item } from './Item';

export class List extends React.Component{
    render(){

        let data =[];

        for (let id in localStorage){
            if(localStorage.getItem(id)){
                data.push(id)}
        }

        const item = data.map((id) =>
            <div key={id} style={{width:'240px', display:'inline-block'}}>
                {<Item id={id}/>}
            </div>
    );
        
        return(
            <div className='list'>
                {item} 
            </div>
        )
    }
}