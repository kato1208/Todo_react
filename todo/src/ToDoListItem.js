import React, { Component } from 'react';
import './ToDoListItem.css'


class ToDoListitem extends Component {
  render() {
    const {
        title,
        description,
    } = this.props;
    
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListitem;