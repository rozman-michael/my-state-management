import React from 'react'
import { useActions } from '../state/index';


const AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value);
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default () => {
  const { todoActions } = useActions();
  return AddTodo({ addTodo: todoActions.addTodo })
};