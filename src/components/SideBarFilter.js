import React from 'react';
import PropTypes from 'prop-types';


export class SideBarFilter extends React.Component{
    onBtnClick = e => {
        const n = +e.currentTarget.innerText;
        this.props.setNumberOfHero(n);
    }
    render(){
        
        return(
            <div className='filter'>
                тут фильтрация
                <button onClick={this.onBtnClick}>2</button>
                <button onClick={this.onBtnClick}>3</button>
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    setNumberOfHero: PropTypes.func.isRequired,
}