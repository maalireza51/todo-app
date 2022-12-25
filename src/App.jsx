import './App.css'
import { Add } from './components/Add'
import { Options } from './components/Options'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { Layout } from './layout/Layout'
import { shallowEqual, useSelector } from 'react-redux'
import { selectFilteredId } from './redux/actionTypes'

function App() {
  const todosList = useSelector(selectFilteredId, shallowEqual)
  const todos = todosList.map(todo => {
    return <TodoItem key={todo} id={todo} />
  })

  return (
    <div className="App">
      <Layout>
        <Add />
        <TodoList>
          {todos.length ? todos : <div style={{ textAlign: "center" }}>Please Add An Item</div>}
        </TodoList>
        <Options />
      </Layout>
    </div>
  )
}

export default App