/*
 * @Author: your name
 * @Date: 2020-03-16 20:49:41
 * @LastEditTime: 2020-03-29 13:24:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-got/src/store/index.js
 */
import {createStore} from 'redux';
import reducers from '../reducers';
const store = createStore(reducers)


export default store