import React, { Component } from 'react';
import { Card, Table, Button, Tooltip, Tag } from 'antd';
import moment from 'moment'
import { getUser } from '../../api'
const ButtonGroup = Button.Group



const titleDisplayMap = {
  id: 'id',
  name: '标题',
  age: "年龄",
  address: "地址",
  createAt: '创建时间',
  amount: '阅读量'
}
export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      totalPage: 1,
      Loading: true
    }
  }
  CreateColumn = (columnKeys) => {
    const columns = columnKeys.map(item => {
      if (item === "createAt") {
        return {
          title: titleDisplayMap[item],
          key: item,
          render: (text, record) => {
            const { createAt } = record
            return moment(createAt).format('YYYY年MM月DD日 HH:mm:ss')
          }
        }
      }

      if (item === 'amount') {
        return {
          title: titleDisplayMap[item],
          key: item,
          render: (text, record) => {
            const { amount } = record
            // 这里是根据一个数字的大小做一个条件渲染
            // 同理，可以做职位级别不同的颜色
            // 总经理：'001'，经理：'002'，主管: '003' 
            // const titleMap = {
            //   '001': 'red',
            //   '002': '#09f',
            //   '003': 'green'
            // }
            // return <Tag color={titleMap[titleKey]}>{record.title}</Tag>
            return (
              <Tooltip title={amount > 230 ? '超过230' : '没超过230'}>
                <Tag color={amount > 230 ? 'red' : 'green'}>{record.amount}</Tag>
              </Tooltip>
            )
          }
        }
      }
      return {
        title: titleDisplayMap[item],
        dataIndex: item,
        key: item,
      }
    })
    columns.push({
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, record) => {
        return (
          <ButtonGroup>
            <Button size="small" type="primary" onClick={this.Edit.bind(this, record.id)} >编辑</Button>
            <Button size="small" type="danger" onClick={this.Edit.bind(this, record)} >删除</Button>
          </ButtonGroup>

        )
      }
    })
    return columns

  }
  Edit = (id) => {
    this.props.history.push(`/admin/article/edit/${id}`)
  }
  componentDidMount() {
    getUser().then(res => {
      const data = res.data
      const columnKeys = Object.keys(data.list[0])
      const columns = this.CreateColumn(columnKeys)
      this.setState({
        dataSource: data.list,
        totalPage: data.total,
        columns
      })
    })
      .finally(() => {
        this.setState({
          Loading: false,
        })
      })
  }
  render() {
    return (
      <Card
        title="文章列表"

        extra={
          <Button type='primary'>
            导出</Button>
        }
      >
        <Table
          loading={this.state.Loading}
          dataSource={this.state.dataSource}
          rowKey={record => record.id}
          columns={this.state.columns}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    );
  }
}
