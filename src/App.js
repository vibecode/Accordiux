import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/List';

const App = () => {
  return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1}}>
          <Header headerText='Accordiux' />
          <LibraryList />
        </View>
      </Provider>
  )
};

export default App;
