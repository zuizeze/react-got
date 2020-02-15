import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ],
      count: 0,
    }
  }

  render() {
    const showListWithTitle = this.state.list.map(item => {
      return <div title={item.name} key={item.name}>{item.price}</div>
    }) 
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {showListWithTitle}
        </ul>

      </div>

    );
  }
}

export default TodoList;
