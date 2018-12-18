
let nextTodoId = 0;
export const addTodo = text => dispatch => {
  return dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  })
}

export const toggleTodo = id => dispatch => {
  return dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

export const setVisibilityFilter = filter => dispatch =>{
  return dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}
