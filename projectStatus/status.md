# 项目进度
1. day1
*  配置项目的基本路由
  
   在项目的的index.js配置最外层的路由，主要从react-router-dom 这个包中引入以下

    ```
    import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
    ```
    1. 这里的BrowserRouter可以变为HashRouter，两者的区别在于HashRouter的路由会多加了一个#
    2. Router是最外层路由组件，这个组件中包含一些和路由的方法和属性
    3. Switch 和原生的switch 一样，里面的组件会按照条件渲染。
    4. Redirect，这个组件的功能是重定向 有三个属性是比较重要的 to  from 和exact 
    5. Route最基本的路由组件 。用来配置单个路径和component的映射关系 有两个参数比较重要。一个是path，即浏览器中的路径 二是component 。用来配置这个路径下需要渲染的组件
* 以下是配置的代码
```html
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
```



2. day2
*  使用axios[第一天](./week1.md)

*  使用rap2配置后端接口和返回
    1. rap2的一些文档[官方链接](http://rap2.taobao.org/),[mock的官方规范文档](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)
    2. 配置了getuser的接口
    *  api的链接
      ```
      http://rap2.taobao.org:38080/app/mock/245540/api/v1/getuser
      ```