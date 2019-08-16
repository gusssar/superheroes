import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export class List extends React.Component{

    // для первого инита подгружаем начальные данные
    // 12 персонажей
    componentDidMount(){
        if(this.props.isInit){
            this.props.GetDataList(1, 12);
        }
    }

    render(){
        //принимаем пропс объекта
        const { data, isInit } = this.props;

        //если это первый инит ставим спинер
        //иначе разбираем массив из стора
        const item = (isInit)?
        <p>Загрузка...</p>:
        data.data.map((el,i) =>
            <div key={i} style={{width:'240px', display:'inline-block'}}>
                <Item item={el}/>
            </div>
    );
        
        return(
            <div className='list'>
                {item} 
            </div>
        )
    }
}

List.propTypes = {
    data: PropTypes.object.isRequired,
    GetDataList: PropTypes.func.isRequired,
    isInit:PropTypes.bool.isRequired,
}