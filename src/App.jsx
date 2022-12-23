import { useState } from 'react'
import './App.css'
import { Add } from './components/Add'
import { Options } from './components/Options'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { Layout } from './layout/Layout'
import {useSelector} from 'react-redux'

function App() {
  const todosList = useSelector(state => state.todos.entities)

  const todos = todosList.map(todo => {
    return <TodoItem key={todo.id} id={todo.id} title={todo.title} status={todo.completed} style={todo.color} />
  })

  return (
    <div className="App">
      <Layout>
        <Add />
        <TodoList>
          {todos.length?todos:<div style={{textAlign:"center"}}>Please Add An Item</div>}
        </TodoList>
        <Options />
      </Layout>
    </div>
  )
}

export default App
