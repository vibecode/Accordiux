import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
      <Provider store={createStore(reducers)}>
        <Text>
          Test
        </Text>
      </Provider>
  )
};

export default App;