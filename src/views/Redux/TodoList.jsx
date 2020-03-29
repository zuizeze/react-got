import React, { Component } from 'react';
import store from '../../store'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange() {
    this.setState(store.getState())
  }

  render() {
    return (
      <div>
        {this.state.inputValue}
      </div>
    );
  }
}

export default TodoList;

