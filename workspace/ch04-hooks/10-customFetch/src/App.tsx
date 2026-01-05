import TodoInfo from '@pages/TodoInfo'
import TodoList from '@pages/TodoList'

const App = () => {

  const id = window.location.pathname.split('/').pop();

  return (
    <>
      {id? <TodoInfo /> : <TodoList />}
    </>
  )
}

export default App
