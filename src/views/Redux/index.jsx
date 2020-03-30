import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import Todo from './Todo'
const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default ReduxDemo;
