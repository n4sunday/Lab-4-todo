import React, { Component } from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

export const put = (x, y) => ({ type: 'PUT', payload: x, payload2: y })

export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
const initState = {
  tasks: [{ id: 1, task: 'Do homework' }, { id: 2, task: 'Read book' }],
}

export const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PUT':
      return state = {
        ...state,
        tasks: [...state.tasks, { id: state.tasks.id += 1, task: action.payload, task2: action.payload2 }]
      }
    default:
      return state
  }


}

export const rootReducer = combineReducers({ tasks: taskReducer })
export const store = createStore(rootReducer)

class App extends Component {
  state = {
    tasks: [
      { id: 1, task: 'Do homework' },
      { id: 2, task: 'Read book' }],
    id: 3
  }
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </head>
        <Provider store={store}>
          <h1>Todo</h1>
          <TaskList tasks={this.state.tasks} />
          <InputTask addTask={this.addTask} id={this.state.id} />
          <br /></Provider>


      </div>
    );
  }
}

export default App