import {
  NotFound,
  Login,
  Setting,
  DashBorder
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
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/setting",
    component: Setting
  },
  {
    pathname: "/dashborder",
    component: DashBorder
  },
  {
    pathname: "/404",
    component: NotFound
  },
]