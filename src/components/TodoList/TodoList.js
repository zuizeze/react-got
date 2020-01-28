import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  
  render() {
    
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>

    );
  }
}

export default TodoList;
