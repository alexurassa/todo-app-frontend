import router from "../router"

const todo_list_url = 'http://localhost:8000/todos/'
const todo_url = 'http://localhost:8000/todo/'

export default {
        postTodo(state, todo_title) {
        const title = todo_title
        const body = JSON.stringify({ title: title })
        fetch(todo_list_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: body,
        })
            .then(response => response.json())
            .then(data => {
                state.commit('addTodo', data)
            })

    },
    async getTodos(state) {
        fetch(todo_list_url, {method: 'GET'})
        .then(response => {
            if(response.status == 401) {
                localStorage.clear();
                router.push({name: 'LoginPage'})

            }
            else return response.json()
        }).then(todos => {
            state.commit('setTodos', todos)
        })
    },
    async deleteTodo(state, id) {
        fetch(`${todo_url}${id}`, { method: 'DELETE', headers: {'Authorization': `Token ${state.getters.getToken}`}})
        state.commit('deleteTodo', id)
    }
}
