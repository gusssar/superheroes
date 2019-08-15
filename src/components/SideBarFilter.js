import React from 'react';
import PropTypes from 'prop-types';


export class SideBarFilter extends React.Component{
    onBtnClick = e => {
        const n = +e.currentTarget.innerText;
        this.props.setNumberOfHero(n);
    }
    onLoadClick = () => {
        this.props.LoadList();
        console.log(this.props.data.data.length)
        let start = this.props.data.data.length+1;
        let end = start + 11;
        if(end<702){
            this.props.GetDataList(start, end);
        }
    }
    render(){
        const { isFetching } = this.props;
        return(
            <div className='filter'>
                тут фильтрация
                <button onClick={this.onBtnClick}>2</button>
                <button onClick={this.onBtnClick}>3</button>
                <button onClick={this.onLoadClick}>Load</button>
                {isFetching? <p>TRUE</p>: <p>FALSE</p>}
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    setNumberOfHero: PropTypes.func.isRequired,
    LoadList: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    GetDataList: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}