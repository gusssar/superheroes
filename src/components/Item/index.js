import React from 'react';

import './index.css';

export class Item extends React.Component{
    render(){
        const { item } = this.props;
        //вся инфа что пришла

        const img=
                <img 
                    className='item__image' 
                    src={item.image.url} 
                    alt={item.name}/>


        return(
            <div className='item'>
                {img}
                <div className='item__name'>{item.name}</div>
                <table className='item__table'>
                <tbody>
                    <tr>
                        <td className='item__table__title'>combat</td>
                        <td className='item__table__score'>{item.powerstats.combat}</td>
                    </tr>
                    <tr>
                        <td className='item__table__title'>durability</td>
                        <td className='item__table__score'>{item.powerstats.durability}</td>
                    </tr>
                    <tr>
                        <td className='item__table__title'>intelligence</td>
                        <td className='item__table__score'>{item.powerstats.intelligence}</td>
                    </tr>
                    <tr>
                        <td className='item__table__title'>power</td>
                        <td className='item__table__score'>{item.powerstats.power}</td>
                    </tr>
                    <tr>
                        <td className='item__table__title'>speed</td>
                        <td className='item__table__score'>{item.powerstats.speed}</td>
                    </tr>
                    <tr>
                        <td className='item__table__title'>strength</td>
                        <td className='item__table__score'>{item.powerstats.strength}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}