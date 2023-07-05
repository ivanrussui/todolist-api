import React, {useEffect, useState} from 'react'
import { taskAPI } from '../api/task-api';

export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '1e9ab0a1-5fdd-4132-9ff8-283c43157eb3'
        taskAPI.getTasks(todolistId).then((res) => {
            console.log(res.data)
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '1e9ab0a1-5fdd-4132-9ff8-283c43157eb3'
        const title = 'Learn React'
        taskAPI.createTask(todolistId, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '1e9ab0a1-5fdd-4132-9ff8-283c43157eb3'
        const taskId = '74a44ad0-0cf5-4331-95d3-1f9cb6b04831'
        taskAPI.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasktTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '1e9ab0a1-5fdd-4132-9ff8-283c43157eb3'
        const taskId = 'd995dbf8-2200-4097-9763-5e2d7a3d0be0'
        const title = 'Change React'
        taskAPI.updateTask(todolistId, taskId, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

