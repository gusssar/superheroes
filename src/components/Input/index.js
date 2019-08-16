import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Input extends React.Component{

    onChange = (event) => {
        this.props.SearchInput(event.target.value.toLowerCase())
    }

    render(){

        return(
            <div className='search'>
                <input 
                    className='search__input'
                    placeholder='Search hero by name...' 
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
    SearchInput: PropTypes.func.isRequired,
}