import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

class App extends React.Component {
  render(){
    return (
      <div>
        <VisibleTodoList />
        <AddTodo />
        <Footer />
      </div>
    )
  }
}
export default App
