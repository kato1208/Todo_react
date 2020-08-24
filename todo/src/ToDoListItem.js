import React, { Component } from 'react';
import './ToDoListItem.css'


class ToDoListitem extends Component {
  render() {
    const {
        title,
        description,
        ...onClick
    } = this.props;
    console.log(onClick)
    return (
      <div className="ToDoListItem" {...onClick}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListitem;
