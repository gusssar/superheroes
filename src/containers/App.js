import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { SideBarFilter } from '../components/SideBarFilter';
import { setNumberOfHero } from '../actions/ListActions';
import { LoadList } from '../actions/ListActions';
// import MakeReq from './Server';
import { GetDataList } from '../actions/DataListActions'

import './App.css';


class App extends React.Component{

  
  render(){
    const { 
      list,
      data, 
      setNumberOfHeroActions, 
      LoadListAction,
      DataLoadListAction } = this.props;
    /**
     * надо сделать, что бы рендер ждал 
     * пока не подгрузятся в localStorage
     * все файлы
     */

    // if(list.download){
    //   console.log('--загрузка началась--');
    //   MakeReq();
    // }
 

    return(
      <div className='app'>
          <Header />
          <List list={list}/>
          <SideBarFilter 
            setNumberOfHero={setNumberOfHeroActions} 
            LoadList={LoadListAction}
            isFetching={data.isFetching}
            GetDataList={DataLoadListAction}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    list: store.list,
    data: store.data,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setNumberOfHeroActions: number => dispatch(setNumberOfHero(number)),
    LoadListAction: () => dispatch(LoadList()),
    DataLoadListAction: () => dispatch(GetDataList()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
