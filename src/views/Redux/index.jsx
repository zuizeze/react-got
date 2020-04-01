import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom'
import store from '../../store';
import UseContext from './UseContext'
import UseEffect from './UseEffect'
import Todo from './Todo'
const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <Todo />
      <div>
        <ul>
          <li><Link to='/admin/redux/usecontext'>usecontext </Link></li>
          <li><Link to="/admin/redux/useeffect">useeffect</Link></li>
        </ul>
      </div>

      <div>
        <Switch>
          <Route to='/admin/redux/usecontext' exact component={UseContext} />
          <Route to='/admin/redux/useeffect' exact component={UseEffect} />
        </Switch>
      </div>
    </Provider>
  );
}

export default ReduxDemo;
