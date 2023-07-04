import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ba78a938-e205-4bcc-aaba-1c48b8953822'
    },
})

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get(`${todolistId}/tasks`)
    },

    createTask(todolistId: string, title: string) {
        return  instance.post(`${todolistId}/tasks`, { title })
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
