import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header/index';
import { Input } from '../components/Input/index';
import { List } from '../components/List/index';
import { SideBarFilter } from '../components/SideBar/index';

import { NeedGetRequest } from '../actions/DataListActions'

import { SearchInput, CheckFilter } from '../actions/InputActions';
import { NextPage } from '../actions/ListActions'

import './App.css';

class App extends React.Component{

  render(){
    const { 
      isInit,
      data, 
      value,
      viewLine,
      filter,
      LoadAllListAction,
      NextPageAction,
      SearchInputAction,
      CheckFilterAction,
    } = this.props;
 
    return(
      <div className='app'>
          <Header />
          <Input 
            SearchInput={SearchInputAction}
            />
          <div className='app__content'>
          <List 
            isInit={isInit}
            data={data}
            value={value}
            keyCheck = {filter}
            viewLine={viewLine}
            LoadAllList={LoadAllListAction}
            NextPage={NextPageAction}
            />
          <SideBarFilter 
            CheckFilter={CheckFilterAction}
            keyCheck = {filter}
            />
          </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.data,
    isInit: store.data.isInit,
    value: store.input.value,
    filter: store.input.checkFilter,
    viewLine: store.displaylist.viewLine,

  }
}

const mapDispatchToProps = dispatch => {
  return{
    NextPageAction: (l) => dispatch(NextPage(l)),
    LoadAllListAction: (start, end) => dispatch(NeedGetRequest(start, end)),
    CheckFilterAction: (key) => dispatch(CheckFilter(key)),
    SearchInputAction: (value) => dispatch(SearchInput(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
