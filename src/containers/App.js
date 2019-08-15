import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { SideBarFilter } from '../components/SideBarFilter';
import MakeReq from './Server';

import './App.css';


class App extends React.Component{

  
  render(){
    
    /**
     * надо сделать, что бы рендер ждал 
     * пока не подгрузятся в localStorage
     * все файлы
     */

    if(this.props.download){
      MakeReq();
    }
 

    return(
      <div className='app'>
          <Header />
          <List />
          <SideBarFilter />
      </div>
    )
  }
}

const mapSateToProps = store => {
  console.log(store);
  return {
    download: store.list,
  }
}

export default connect(mapSateToProps)(App);
