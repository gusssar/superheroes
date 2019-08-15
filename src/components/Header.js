import React from 'react';

export class Header extends React.Component{
    render(){

        const style = {background:'green'}

        return(
            <div className='header' style={style}>
                Здесь будет торжественный заголовок
            </div>
        )
    }
}