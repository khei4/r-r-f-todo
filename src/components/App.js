import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      count: 0
     };

  }

  addTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, {
          id: this.state.count,
          text: text,
          completed: false
        }],
      count: this.state.count + 1,
    })
    console.log()
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })
  }
  render(){
    return (
      <div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App
