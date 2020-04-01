/*
 * @Author: your name
 * @Date: 2020-02-24 21:12:22
 * @LastEditTime: 2020-03-28 12:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/src/routes/index.js
 */
import {
  Login,
  NotFound,
  DashBorder,
  Setting,
  ArticleEdit,
  ArticleList,
  ReduxDemo,
  Test,

} from "../views"

export const mainRouter = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/test",
    component: Test
  },
  {
    pathname: "/404",
    component: NotFound
  },
]
export const adminRoutes = [
  {
    pathname: "/admin/dashborder",
    component: DashBorder,
    isNav: true,
    title: "仪表盘",
    icon:"dashboard"
  },
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/admin/setting",
    component: Setting,
    isNav: true,
    icon:'setting',
    title: "设置"
  },
  {
    pathname: "/admin/redux",
    component: ReduxDemo,
    isNav: true,
    icon:'zhihu-utlined',
    title: "redux"
  },

  {
    pathname: "/admin/article",
    component: ArticleList,
    exact: true,
    isNav: true,
    icon:'unordered-list',
    title: "文章列表"
  }, {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
  },

]