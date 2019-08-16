import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Input extends React.Component{

    onEnterPress = (event) => {
        if(event.key === 'Enter'){
            console.log(event.target.value)
        }

    }

    // onClickSearch = () => {
    //     this.props.SearchInput(this.props.value)
    // }

    onChange = (event) => {
        this.props.SearchInput(event.target.value.toLowerCase())
    }

    render(){

        return(
            <div className='search'>
                <input 
                    className='search__input'
                    placeholder='Search hero by name...' 
                    // onKeyPress={this.onEnterPress}
                    onChange={this.onChange}
                ></input>
                <button
                    className='search__button'
                    onClick={this.onClickSearch}
                >Search</button>
            </div>
        )
    }
}

Input.propTypes = {
    // ChangeInput: PropTypes.func.isRequired,
    SearchInput: PropTypes.func.isRequired,
    // value: PropTypes.string.isRequired,
}