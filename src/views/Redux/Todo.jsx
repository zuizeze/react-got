import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import store from '../../store'
import TodoList from './TodoList';
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.changeValue = this.changeValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodoList = this.deleteTodoList.bind(this)
    store.subscribe(this.storeChange)
  }
  addTodo = () => {
    const action = {
      "type": 'addTodo',
      "value": this.state.inputValue
    }
    store.dispatch(action)
    this.setStat={
      inputValue:""
    }
  }
  deleteTodoList = (index) => {
    const action = {
      "type": 'deleteTodo',
      "index": index
    }
    store.dispatch(action)
    
  }
  changeValue = (e) => {
    const action = {
      type: 'changeInputValue',
      value: e.target.value
    }
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }
  render() {
    return (
      <>
        <div className="input-container">
          <Input placeholder={this.state.inputValue} value={this.state.inputValue} style={{ width: "400px" }} onChange={this.changeValue} />
          <Button onClick={this.addTodo}>添加一个</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }} >
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => this.deleteTodoList(index)}
              >
                {item.text}
              </List.Item>
            )}
          />

        </div>

        <TodoList />

      </>
    );
  }
}

export default Todo;
