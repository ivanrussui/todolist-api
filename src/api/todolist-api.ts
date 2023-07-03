import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ba78a938-e205-4bcc-aaba-1c48b8953822'
    },
})

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get('/todo-lists')
        return promise
    },

    createTodolist(title: string) {
        const promise = instance.post('/todo-lists', { title: title })
        return promise
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete(`/todo-lists/${todolistId}`)
        return promise
    },

    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(`/todo-lists/${todolistId}`, { title: title })
        return promise
    },
}
