import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


export class SideBarFilter extends React.Component{
    onBtnClick = e => {
    }

    onChangeCheck = (event)=>{
        this.props.CheckFilter(event.currentTarget.value);
    }

    render(){

        const { keyCheck } = this.props;

        return(
            <div className='sidebar'>
                <div className='sidebar__title'>Make filter here</div>
                <form 
                    className='sidebar__alignment'
                    >Alignment
                        <div><input type='radio' className='radio' onChange={this.onChangeCheck} checked={keyCheck==='all'} value='all'/>  All</div>
                        <div><input type='radio' className='radio' onChange={this.onChangeCheck} checked={keyCheck==='good'} value='good'/>  Good</div>
                        <div><input type='radio' className='radio' onChange={this.onChangeCheck} checked={keyCheck==='bad'} value='bad'/>  Bad</div>
                </form>
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    CheckFilter: PropTypes.func.isRequired,
    keyCheck: PropTypes.string.isRequired,
}