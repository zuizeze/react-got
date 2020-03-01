/*
 * @Author: your name
 * @Date: 2020-02-23 11:24:09
 * @LastEditTime: 2020-03-01 13:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/src/App.js
 */
import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
// import { getUser } from './api'
import { adminRoutes } from './routes'
import { Frame } from './components'

const menus = adminRoutes.filter(route => route.isNav === true)
export class App extends Component {
  render() {
    return (
      <>
        <Frame menus={menus}>
          <Switch>
            {
              adminRoutes.map(route => {
                return <Route
                  key={route.pathname}
                  path={route.pathname}
                  exact={route.exact}
                  render={(routeProps) => {
                    return <route.component {...routeProps} />
                  }}
                />
              })
            }
            <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
            <Redirect to='/404' />
          </Switch>
        </Frame>
      </>
    );
  }
}

export default App;

