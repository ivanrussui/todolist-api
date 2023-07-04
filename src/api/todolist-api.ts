import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ba78a938-e205-4bcc-aaba-1c48b8953822'
    },
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>('/todo-lists')
        return promise
    },

    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{item: TodolistType}>>('/todo-lists', { title: title })
        return promise
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`/todo-lists/${todolistId}`)
        return promise
    },

    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`/todo-lists/${todolistId}`, { title: title })
        return promise
    },
}
