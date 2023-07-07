import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ba78a938-e205-4bcc-aaba-1c48b8953822'
    },
})

type TaskType = {
    id: string
    todoListId: string
    title: string
    addedDate: string
    order: number
    priority: number
    status: number
    deadline: null
    description: null
    startDate: null
}

type GetTasksResponseType = {
    error: null
    totalCount: number
    items: TaskType[]
}

type ResponseType<T = {}> = {
    fieldsErrors: []
    messages: []
    resultCode: number
    data: T
}

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`${todolistId}/tasks`)
    },

    createTask(todolistId: string, title: string) {
        return  instance.post<ResponseType<{ item: TaskType }>>(`${todolistId}/tasks`, { title })
    },

    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`${todolistId}/tasks/${taskId}`)
    },

    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseType<{ item: TaskType }>>(`${todolistId}/tasks/${taskId}`, { title })
    },
}
