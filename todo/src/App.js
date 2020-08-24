import React, { Component } from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem"

function App() {
  return (
    <div className="App">
      <div>
        <ToDoListItem 
        title="ホームページ作成" 
        description="サークルホームページを今週中に作成する" 
        />
      </div>
    </div>
  );
}

export default App;
