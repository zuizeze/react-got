/*
 * @Author: your name
 * @Date: 2020-02-23 11:24:09
 * @LastEditTime: 2020-02-29 21:06:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/src/App.js
 */
import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
// import { getUser } from './api'
import { adminRouter } from './routes'
export class App extends Component {
  render() {
    return (
      <div>
        这是公共部分
      <Switch>
          {
            adminRouter.map(route => {
              console.log(route)
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
          <Redirect to={adminRouter[0].pathname} from='/admin'  exact/>
          <Redirect to='/404' />
        </Switch>
      </div>
    );
  }
}

export default App;

