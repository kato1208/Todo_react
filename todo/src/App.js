import React, { Component } from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem"

function App() {
  return (
    <div className="App">
      <form className="App-form">
        <div>
          <input id="title" placeholder="title" />
          <textarea id="description" placeholder="description" />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
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
