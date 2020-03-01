/*
 * @Author: your name
 * @Date: 2020-02-23 11:24:09
 * @LastEditTime: 2020-03-01 11:47:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/config-overrides.js
 */
const {
	override,
	fixBabelImports,
	addLessLoader,
	useBabelRc
} = require('customize-cra');


module.exports = override(useBabelRc(),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#61CFEA'
		},
	}),
);
