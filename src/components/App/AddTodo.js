import React from 'react';

const AddTodo = ({addTodo}) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input) {
            return
          }
          addTodo(input);
          input = '';
        }}
      >
        <input onChange={e => {input = e.target.value}} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
