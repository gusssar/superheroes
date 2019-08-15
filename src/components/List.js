import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export class List extends React.Component{
    render(){

        const { list } = this.props;
        console.log('Class List downloads is', list.download);
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

List.propTypes = {
    list: PropTypes.object.isRequired,
}