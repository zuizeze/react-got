import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import antd from 'antd'
import { ConfigProvider } from 'antd';
import { Provider} from 'react-redux'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRouter } from "./routes"
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/es/locale/zh_CN';


import store from './store'

ReactDOM.render(
  
  //外层路由的配置
  <Provider store={store} >
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          //使用路由
          <Route path="/admin" render={(routeProps) => {
            //Todo 需要登陆才能查看
            return <App {...routeProps} />
          }} />

          {
            mainRouter.map(route => {
              return <Route key={route.pathname} path={route.pathname} component={route.component} />
            })

          }
          <Redirect to="/admin" from="/" exact />
          <Redirect to="/404" />
        </Switch>

      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
