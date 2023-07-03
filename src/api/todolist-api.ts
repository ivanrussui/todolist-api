import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ba78a938-e205-4bcc-aaba-1c48b8953822'
    }
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            { title: title },
            settings
        )
        return promise
    },
}
