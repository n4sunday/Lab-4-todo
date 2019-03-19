import React, { Component } from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
class App extends Component {
  state = {
    tasks: [
      { id: 1, task: 'Do homework' },
      { id: 2, task: 'Read book' }],
    id: 3
  }
  addTask = (task, task2) => {
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.id, task, task2 }],
      id: this.state.id + 1
    })
  }
  render() {
    return (
      <div className="App">
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </head>
        <h1>Todo</h1>
        <TaskList tasks={this.state.tasks} />
        <InputTask addTask={this.addTask} id={this.state.id} />
        <br />
      </div>
    );
  }
}
export default App;