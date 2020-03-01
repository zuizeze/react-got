/*
 * @Author: your name
 * @Date: 2020-03-01 10:29:04
 * @LastEditTime: 2020-03-01 11:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /linqiang/react-got/src/components/Frame/index.js
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'

import './frame.less'
import logo from './logo.png'
import { adminRoutes } from '../../routes'

const { Header, Content, Sider } = Layout;


@withRouter
class Frame extends Component {

  onMenuClick = ({ key }) => {
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout>
        <Header className="header got-header">
          <div id='header-logo' className='logo' >
            <img src={logo} alt="logo" />
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              onClick={this.onMenuClick}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                this.props.menus.map(item => {
                  return (
                    <Menu.Item key={item.pathname}  >
                      <Icon type={item.icon} />
                      {item.title}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default Frame
