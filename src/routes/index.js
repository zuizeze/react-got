/*
 * @Author: your name
 * @Date: 2020-02-24 21:12:22
 * @LastEditTime: 2020-02-29 21:04:54
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
  ArticleList
} from "../views"

export const mainRouter = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: NotFound
  },
]
export const adminRouter = [
  {
    pathname: "/admin/dashborder",
    component: DashBorder
  },
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/admin/setting",
    component: Setting
  },
  
  {
    pathname: "/admin/article",
    component: ArticleList,
    exact:true
  },{
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,

  },

]