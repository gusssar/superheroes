import React from 'react';
// import PropTypes from 'prop-types';

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
    render(){
        return(
            <div className='sidebar'>
                <div className='sidebar__title'>Make filter here</div>
                <form className='sidebar__alignment'>Alignment
                    <div><input type='radio' className='radio' checked={true}/>  All</div>
                    <div><input type='radio' className='radio' checked={false}/>  Good</div>
                    <div><input type='radio' className='radio' checked={false}/>  Bad</div>
                </form>
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    // setNumberOfHero: PropTypes.func.isRequired,
    // LoadAllList: PropTypes.func.isRequired,
    // data: PropTypes.object.isRequired,
}