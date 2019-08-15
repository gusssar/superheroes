import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { SideBarFilter } from '../components/SideBarFilter';
import { setNumberOfHero } from '../actions/ListActions';
import MakeReq from './Server';

import './App.css';


class App extends React.Component{

  
  render(){
    const { list, setNumberOfHeroActions } = this.props;
    /**
     * надо сделать, что бы рендер ждал 
     * пока не подгрузятся в localStorage
     * все файлы
     */

    if(list.download){
      MakeReq();
    }
 

    return(
      <div className='app'>
          <Header />
          <List list={list}/>
          <SideBarFilter setNumberOfHero={setNumberOfHeroActions}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    list: store.list,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setNumberOfHeroActions: number => dispatch(setNumberOfHero(number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
