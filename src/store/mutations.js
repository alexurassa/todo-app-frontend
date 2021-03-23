export default {
  ADD_USER(state, payload) {
    state.user = payload
  },
  setTodos(state, payload) {
    state.todos = payload
  },
  addTodo(state, payload) {
    state.todos.unshift(payload)
  },
  deleteTodo(state, payload) {
    const i = state.todos.findIndex(todo => todo.id === payload)
    state.todos.splice(i, 1)
  },
  SET_USER_TOKEN(state, payload) {
    state.user_token = payload
  }
}
