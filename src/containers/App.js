import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header/index';
import { Input } from '../components/Input/index';
import { List } from '../components/List/index';
import { SideBarFilter } from '../components/SideBar/index';

// import { setNumberOfHero } from '../actions/ListActions';
import { NeedGetRequest } from '../actions/DataListActions'

// import { ChangeInput } from '../actions/InputActions';
import { SearchInput } from '../actions/InputActions';
import { NextPage } from '../actions/ListActions'

import './App.css';

class App extends React.Component{

  render(){
    const { 
      isInit,
      data, 
      value,
      viewLine,
      LoadAllListAction,
      NextPageAction,
      // ChangeInputAction,
      SearchInputAction,
      // ViewListAction,
      // input,
    } = this.props;
 
    return(
      <div className='app'>
          <Header />
          <Input 
            // ChangeInput={ChangeInputAction} 
            SearchInput={SearchInputAction}
            // value={input.value}
            />
          <div className='app__content'>
          <List 
            isInit={isInit}
            data={data}
            value={value}
            viewLine={viewLine}
            LoadAllList={LoadAllListAction}
            NextPage={NextPageAction}
            // ViewList={ViewListAction}
            />
          <SideBarFilter 
            // data={data}
            // setNumberOfHero={setNumberOfHeroActions} 
            // LoadList={LoadListAction}
            // isFetching={data.isFetching}
            // LoadAllList={LoadAllListAction}
            />
          </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    // list: store.list,
    data: store.data,
    isInit: store.data.isInit,
    value: store.input.value,
    viewLine: store.displaylist.viewLine,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    // setNumberOfHeroActions: number => dispatch(setNumberOfHero(number)),
    NextPageAction: () => dispatch(NextPage()),
    LoadAllListAction: (start, end) => dispatch(NeedGetRequest(start, end)),
    // ViewListAction: (value) => dispatch(ViewList(value)),
    // ChangeInputAction: (value) => dispatch(ChangeInput(value)),
    SearchInputAction: (value) => dispatch(SearchInput(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
