import React from 'react';

export class Item extends React.Component{
    render(){
        const { id } = this.props;
        //вся инфа что пришла
        const item_data=JSON.parse(localStorage.getItem(id));

        const img=
            <div>
                <img 
                    src={item_data.image.url} 
                    alt={item_data.name}
                    width={'220px'} />
            </div>
        const name = item_data.name

        return(
            <div className='item'>
                {img}
                {name}
            </div>
        )
    }
}