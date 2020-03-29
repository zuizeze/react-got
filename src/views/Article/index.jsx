import { Card, Table, Button, Tooltip, Tag, Modal, Typography, message } from 'antd';
import React, { Component } from 'react';
import moment from 'moment'
import { getUser, deleteUser } from '../../api'
import XLSX from 'xlsx'


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
      columns: [],
      totalPage: 1,
      modelMessage: 'djfojalkd',
      Loading: true,
      articleDelete: false,
      deleteArticleID: null,//要删除的那个id
      confirmDeleteLoading: false
    }
  }

  //创建表格的组件
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
            <Button size="small" type="danger" onClick={this.deleteArticle.bind(this, record)}>删除</Button>
          </ButtonGroup>

        )
      }
    })
    return columns

  }

  //删除按钮
  deleteArticle(record) {
    this.setState({
      articleDelete: true,
      deleteArticleID: record.id
    })
  }

  //编辑按钮，路由跳转
  Edit = (id) => {
    this.props.history.push(`/admin/article/edit/${id}`)
  }

  //挂载组件,请求表格组件
  componentDidMount() {
    getUser().then(res => {
      const data = res.data
      const columnKeys = Object.keys(data.list[0])
      const columns = this.CreateColumn(columnKeys)
      console.log(columns, "dataSource", data.list);
      this.setState({
        dataSource: data.list,
        totalPage: data.total,
        columns
      })
    })
      .finally(() => {
        this.setState({
          Loading: false,
          articleDelete: false
        })
      })
  }

  //导出按钮
  ExportXls = () => {
    const data = [Object.keys(this.state.dataSource[0])] // [['id', 'title', 'author', 'amount', 'createAt']]
    for (let i = 0; i < this.state.dataSource.length; i++) {
      // data.push(Object.values(this.state.dataSource[i]))
      data.push([
        this.state.dataSource[i].name,
        this.state.dataSource[i].age,
        this.state.dataSource[i].address,
        this.state.dataSource[i].amount,
        moment(this.state.dataSource[i].createAt).format('YYYY年MM月DD日 HH:mm:ss'),
        this.state.dataSource[i].id,
      ])
    }
    /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, `articles-${this.state.offset / this.state.limited + 1}-${moment().format('YYYYMMDDHHmmss')}.xlsx`)
  }

  //模态框的取消和关闭按钮
  cancelDelete = () => {
    this.setState({
      articleDelete: false,
    })
  }

  //确认删除的按钮
  confirmDelete = () => {
    this.setState({
      articleDelete: true,
      confirmDeleteLoading: true
    })
    deleteUser(this.state.deleteArticleID).then(res => {
      message.success(`成功删除${res.data.name}`)
    }).finally(() => {
      this.setState({
        articleDelete: false,
        confirmDeleteLoading: false
      })
    })
  }


  render = () => {
    return (
      <Card
        title="文章列表"

        extra={
          <Button type='primary' onClick={this.ExportXls}>
            导出
          </Button>
        }
      >
        <Table
          loading={this.state.Loading}
          dataSource={this.state.dataSource}
          rowKey={record => record.id}
          columns={this.state.columns}
          pagination={{ pageSize: 10 }}
        />
        <Modal
          title="删除所选的数据，不可恢复，是否继续"
          visible={this.state.articleDelete}
          content={this.state.modelMessage}
          okText="别墨迹"
          confirmLoading={this.state.confirmDeleteLoading}
          onOk={this.confirmDelete.bind(IDBFactory)}
          onCancel={this.cancelDelete}
        >
          {this.state.modelMessage}
        </Modal>
      </Card>
    );
  }
}
