import React from 'react';
import { Header } from '../components/Header'
import { List } from '../components/List';
import { SideBarFilter } from '../components/SideBarFilter'
import MakeReq from './Server';
import './App.css';


class App extends React.Component{
  componentWillMount(){
    MakeReq();
  }
  render(){

    /**
     * надо сделать, что бы рендер ждал 
     * пока не подгрузятся в localStorage
     * все файлы
     */
 

    return(
      <div className='app'>
          <Header />
          <List />
          <SideBarFilter />
      </div>
    )
  }
}

export default App;
