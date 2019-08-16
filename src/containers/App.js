import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { List } from '../components/List';
import { SideBarFilter } from '../components/SideBarFilter';
import { setNumberOfHero } from '../actions/ListActions';
import { LoadList } from '../actions/ListActions';
import { NeedGetRequest } from '../actions/DataListActions'

import './App.css';
import { ChangeInput } from '../actions/InputActions';
import { SearchInput } from '../actions/InputActions';


class App extends React.Component{
  
  render(){
    const { 
      isInit,
      data, 
      setNumberOfHeroActions, 
      LoadListAction,
      DataLoadListAction,
      ChangeInputAction,
      SearchInputAction,
    } = this.props;
 
    return(
      <div className='app'>
          <Header />
          <Input 
            ChangeInput={ChangeInputAction} 
            SearchInput={SearchInputAction}/>
          <List 
            isInit={isInit}
            data={data}
            GetDataList={DataLoadListAction}/>
          <SideBarFilter 
            data={data}
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
    isInit: store.data.isInit,
    input: store.input,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setNumberOfHeroActions: number => dispatch(setNumberOfHero(number)),
    LoadListAction: () => dispatch(LoadList()),
    DataLoadListAction: (start, end) => dispatch(NeedGetRequest(start, end)),
    ChangeInputAction: (value) => dispatch(ChangeInput(value)),
    SearchInputAction: () => dispatch(SearchInput())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
