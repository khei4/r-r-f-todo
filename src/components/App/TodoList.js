import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos , toggleTodo, fetchTodos }) => (
  <ul>
    <button onClick={() => fetchTodos()}>Fetch</button>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id, todo.completed)} />
    ))}
  </ul>
)
export default TodoList
