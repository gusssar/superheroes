import React from 'react';

export class Item extends React.Component{
    render(){
        const { item } = this.props;
        //вся инфа что пришла
        // const item_data=JSON.parse(localStorage.getItem(id));

        const img=
            <div>
                <img 
                    src={item.image.url} 
                    alt={item.name}
                    width={'220px'} />
            </div>
        const name = item.name

        return(
            <div className='item'>
                {img}
                {name}
            </div>
        )
    }
}