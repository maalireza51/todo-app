import { useState } from 'react'
import './App.css'
import { Add } from './components/Add'
import { Options } from './components/Options'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { Layout } from './layout/Layout'

function App() {
  const todosList = [
    { id: 0, title: 'title 1', completed: true, color: "red" },
    { id: 1, title: 'title 2', completed: false, color: "blue" },
    { id: 2, title: 'title 3', completed: true, color: "purple" },
    { id: 3, title: 'title 4', completed: false, color: "yellow" },
    { id: 4, title: 'title 5', completed: false, color: "green" },
    { id: 5, title: 'title 6', completed: true }
  ]

  const todos = todosList.map(todo => {
    return <TodoItem key={todo.id} title={todo.title} status={todo.completed} style={todo.color} />
  })
  return (
    <div className="App">
      <Layout>
        <Add />
        <TodoList>
          {todos}
        </TodoList>
        <Options />
      </Layout>
    </div>
  )
}

export default App
