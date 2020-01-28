import React, { Component } from 'react';

export class TodoList extends Component {
  render() {
    return (
      <div>
     {this.props.name}
      </div>
    );
  }
}

export default TodoList;
