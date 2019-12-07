import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
