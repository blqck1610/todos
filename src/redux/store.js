import {createStore} from 'redux';
import { loadState, saveState } from './localStorage'



const initialState = {
  todos: loadState() || [
    { done: true, content: 'abc' },
    { done: false, content: 'qwe' },
    { done: false, content: 'efgh' }
  ]
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      }
    case 'TOGGLE_DONE':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, done: !todo.done } : todo
        )
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, content: action.payload.content }
            : todo
        )
      }
    default:
      return state
  }
}

const store = createStore(todosReducer)

store.subscribe(() => {
  saveState(store.getState().todos) // Save todos to local storage whenever the state changes
})

export default store


