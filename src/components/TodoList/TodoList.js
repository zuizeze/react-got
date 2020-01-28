import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      list: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ]
    }
  }

  render() {
    const showList = this.state.list.map(item => {
      console.log(item)
      return <h1 key={item.name}>{item.price}</h1>
    })
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        {showList}
      </div>

    );
  }
}

export default TodoList;
