<!--
 * @Author: your name
 * @Date: 2020-03-01 12:53:03
 * @LastEditTime: 2020-03-01 13:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/projectStatus/decorator.md
 -->
## 使用装饰器
* 由于使用到了hoc组件，为了代码的可读性，这里使用了javascript的装饰器模式。什么是装饰器模式，可以看这篇博客[阮一峰装饰器教程](https://es6.ruanyifeng.com/#docs/decorator)
* 下面是我配置的过程
  1. 安装装饰器插件
   ```
   npm install --save-dev @babel/plugin-proposal-decorators
   ```
  2. 在config-overrides.js这个文件中，更改配置
    ```javascript
    const {useBabelRc} = require('customize-cra')
    ```
    and
    ```javascript
      module.exports = override(useBabelRc());
    ```
  3. 1. 在项目根目录下新建一个.babelrc文件，在文件中配置相关代码
      ```javascript
        {
          "plugins": [
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ],
          ],
        }
      ```
     2. 或者在package.json文件下完成配置
        ```javascript
        "babel": {
          "plugins": [
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ],
          ],}
        ```