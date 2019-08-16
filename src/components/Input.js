import React from 'react';
import PropTypes from 'prop-types';

export class Input extends React.Component{

    onEnterPress = (event) => {
        if(event.key === 'Enter'){
            console.log(event.target.value)
        }
    }

    onClickSearch = () => {
        // this.props.SearchInput(this.props.value)
    }

    onChange = (event) => {
        // this.props.ChangeInput(event.target.value)
    }

    render(){

        return(
            <div>
                <input 
                    placeholder='Search hero by name...' 
                    onKeyPress={this.onEnterPress}
                    onChange={this.onChange}
                ></input>
                <button onClick={this.onClickSearch}>Search</button>
            </div>
        )
    }
}

Input.propTypes = {
    // ChangeInput: PropTypes.func.isRequired,
    // SearchInput: PropTypes.func.isRequired,
    // value: PropTypes.string.isRequired,
}