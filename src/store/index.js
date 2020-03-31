/*
 * @Author: your name
 * @Date: 2020-03-16 20:49:41
 * @LastEditTime: 2020-03-29 13:24:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-got/src/store/index.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-thunk'

import {useState} from 'react'
import reducers from '../reducers';
const store = createStore(
  reducers,
  applyMiddleware(thunk)
)






export default store