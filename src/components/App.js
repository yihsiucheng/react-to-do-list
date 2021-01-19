import React, { Component } from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="header">
          <h1 className="main-title">To Do List</h1>
        </div>
        <div className="content">
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
