<!--
 * @Author: your name
 * @Date: 2020-03-04 23:14:28
 * @LastEditTime: 2020-03-04 23:43:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datahub-master/Users/linqiang/Desktop/react-demo/ppt.md
 -->
# react基础
## 1、基础语法
  * jsx
  * react-dom对象

## 2、组件的基础
  * class类型的组件
  * function类型的组件
  * 使用React.createClass来生成一个组件<!--代办-->
  * 区别
## 3、 组件之间的通信
  * 父=>子组件（通过props传递）
  * 子=>父组件（通过父组件的回调函数）
  * 子组件与子组件（通过redux统一管理）
## 4、组件的生命周期和react-dom-diff
  * constructor （在这个生命函数中设置state）
  * componentDidMount（在这个生命周期中请求参api，在通过setState这个方法来直接将最新的state更新）
  * shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用，如果为是会重新调用render函数
  * render 渲染的时候调用他，将里面的入react-dom对象插入到元素节点
## 5、react-router-dom
   