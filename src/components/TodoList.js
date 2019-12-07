import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { useStore, useActions } from '../state/index';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => { 
  return (
    <div style={{'margin': '20px'}}>
      {todos && todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      )}
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default () => {
  const { todos } = useStore().state;
  const { todoActions } = useActions();
  return TodoList({todos, toggleTodo:todoActions.toggleTodo, deleteTodo:todoActions.deleteTodo })
};