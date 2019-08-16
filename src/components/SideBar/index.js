import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


export class SideBarFilter extends React.Component{
    onBtnClick = e => {
        const n = +e.currentTarget.innerText;
        // this.props.setNumberOfHero(n);
    }
    onLoadClick = () => {
        // console.log(this.props.data.data.length)
        // let start = this.props.data.data.length+1;
        // let end = start + 11;
        // if(end<702){
        //     this.props.LoadAllList(start, end);
        // }
    }

    onChangeCheck = (event)=>{
        console.log(event.currentTarget.value);
        this.props.CheckFilter(event.currentTarget.value);
    }

    render(){

        const { keyCheck } = this.props;
        console.log(keyCheck)

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
    // LoadAllList: PropTypes.func.isRequired,
    // data: PropTypes.object.isRequired,
}