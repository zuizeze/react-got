/*
 * @Author: your name
 * @Date: 2020-02-23 10:14:38
 * @LastEditTime: 2020-03-28 12:16:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/src/views/index.js
 */
import { Loading } from '../components'
import Loadable from 'react-loadable'

// import NotFound from './NotFound'
// import Login from './Login'
// import DashBorder from './DashBorder'
// import Setting from './Setting'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'


const DashBorder = Loadable({
  loader: () => import('./DashBorder'),
  loading: Loading
})
const Test = Loadable({
  loader: () => import('./Test'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})

const Setting = Loadable({
  loader: () => import('./Setting'),
  loading: Loading
})
const ReduxDemo = Loadable({
  loader: () => import('./Redux'),
  loading: Loading
})
const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})

const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading
})


export {
  Login,
  NotFound,
  DashBorder,
  Setting,
  ArticleEdit,
  ArticleList,
  ReduxDemo,
  Test
}