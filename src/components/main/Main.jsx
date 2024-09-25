import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Main = () => {
  //   const [todos, setTodos] = useState(tds)
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(-1)
  const [newTodo, setNewTodo] = useState('')

  const handleChangeBox = (e, i) => {
    dispatch({
      type: 'TOGGLE_DONE',
      payload: i
    })
    // const updateTodos = todos.map((todo, index) => {
    //   if (index === i) {
    //     return { ...todo, done: e.target.checked }
    //   }
    //   return todo
    // })
    // setTodos(updateTodos)
  }

  const handleDelete = (e, i) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: i
    })

    // const updateTodos = todos.filter((todo, index) => index !== i)
    // setTodos(updateTodos)
  }

  const handleAdd = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: { done: false, content: newTodo }
    })
    // const updateTodos = [...todos, { }]
    // setTodos(updateTodos)
    setNewTodo('')
  }

  const handleSetTodo = e => {
    setNewTodo(e)
  }

  const handleChange = (e, i) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: { index: i, content: e.target.value }
    })

    // const updateTodos = todos.map((todo, index) => {
    //   if (index === i) {
    //     return { ...todo, content: e.target.value }
    //   }
    //   return todo
    // })
    // setTodos(updateTodos)
  }

  return (
    <div>
      <div>
        <input value={newTodo} onChange={e => handleSetTodo(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>
                <input
                  type='checkbox'
                  name='done'
                  checked={todo.done}
                  onChange={e => handleChangeBox(e, index)}
                />
              </td>
              <td
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              >
                {isEdit !== index ? (
                  <span>{todo.content}</span>
                ) : (
                  <input
                    value={todo.content}
                    onChange={e => handleChange(e, index)}
                  />
                )}
              </td>
              <td>
                {isEdit !== index ? (
                  <button onClick={() => setIsEdit(index)}>edit</button>
                ) : (
                  <button onClick={() => setIsEdit(-1)}>done</button>
                )}
              </td>
              <td>
                <button onClick={e => handleDelete(e, index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Main

// const tds = [
//   {
//     done: true,
//     content: 'abc'
//   },
//   {
//     done: false,
//     content: 'qwe'
//   },
//   {
//     done: false,
//     content: 'efgh'
//   }
// ]
