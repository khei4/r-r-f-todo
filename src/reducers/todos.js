const todos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODO':
      return action.todos
    default:
      return state
  }
}

export default todos
