import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../Item/index.js';

import './index.css';

export class List extends React.Component{

    // для первого инита подгружаем начальные данные
    // 12 персонажей
    componentDidMount(){
        if(this.props.isInit){
            this.props.LoadAllList(1, 20);
        }
    }

    render(){
        //принимаем пропс объекта
        const { data, isInit, value, keyCheck, viewLine, NextPage } = this.props;

        const itemConst = (arr,_i) =><div key={_i} className='list__content__item'><Item item={arr[_i]}/></div>

        //необходимое количество для показа
        //по дефолту 4
        function MapingItem(arr, val, _filter, _checkbox){
            let _item=[];
            if(_filter){
                for (let _i=0; _i<val; _i++){
                    const isIncludes=arr[_i].name.toLowerCase().includes(_filter)
                    if(isIncludes){_item.push(itemConst(arr,_i))}
                }
            } 
            else if(_checkbox!=='all'){
                for (let _i=0; _i<val; _i++){
                    const isIncludes=arr[_i].biography.alignment.toLowerCase().includes(_checkbox)
                    if(isIncludes){_item.push(itemConst(arr,_i))}
                }
            }
            else {
                for (let _i=0; _i<val; _i++){
                    _item.push(itemConst(arr,_i))
                }
            }
            return _item
        }

        //отображем что надо покзать
        // const need_item = NeedItem(data.data, viewLine)
        const need_item = MapingItem(data.data, viewLine, value, keyCheck);

        function onNextPage(){
            NextPage()
        }

        //если это первый инит ставим спинер
        //иначе разбираем массив из стора
        const item = (isInit)?
        <p>Загрузка...</p>:need_item;
        
        return(
            <div className='list'>
                <div className='list__content'>
                    {item}
                </div>
                <div className='list__next'>
                    <button onClick={onNextPage}>Ещё</button>
                </div>
            </div>
        )
    }
}

List.propTypes = {
    viewLine: PropTypes.number,
    data: PropTypes.object.isRequired,
    value: PropTypes.string,
    keyCheck: PropTypes.string.isRequired,
    isInit:PropTypes.bool.isRequired,
    LoadAllList: PropTypes.func.isRequired,
    NextPage: PropTypes.func.isRequired,
}