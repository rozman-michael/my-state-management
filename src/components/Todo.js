import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css';

const Todo = ({ onClick, onDelete, completed, text }) => (
  <div className="Todo">
    <span onClick={onClick}
    className={ `Todo__text ${completed ? "Todo__text--completed" : "Todo__text--not-completed"}`}>
    {text}</span>
    <span className="Todo__delete" onClick={onDelete}>X</span>
  </div>

)

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
