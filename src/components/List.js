import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export class List extends React.Component{

    // для первого инита подгружаем начальные данные
    // 12 персонажей
    componentDidMount(){
        if(this.props.isInit){
            this.props.LoadAllList(1, 12);
            // this.props.ViewList(4);
        }
    }

    render(){
        //принимаем пропс объекта
        const { data, isInit } = this.props;

        //необходимое количество для показа
        //по дефолту 4
        function NeedItem(arr, val=4){
            let _item=[];
            for (let _i=0; _i<val; _i++){
                _item.push(
                    <div key={_i} style={{width:'240px', display:'inline-block'}}>
                        <Item item={arr[_i]}/>
                    </div>
                )
            }
            return _item;
        }

        //отображем что надо покзать
        const need_item = NeedItem(data.data, 4)

        //если это первый инит ставим спинер
        //иначе разбираем массив из стора
        const item = (isInit)?
        <p>Загрузка...</p>:need_item;
        
        return(
            <div className='list'>
                {item} 
            </div>
        )
    }
}

List.propTypes = {
    data: PropTypes.object.isRequired,
    isInit:PropTypes.bool.isRequired,
    LoadAllList: PropTypes.func.isRequired,
    // ViewList: PropTypes.func.isRequired,
}