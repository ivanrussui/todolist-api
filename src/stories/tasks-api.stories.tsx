import React, {useEffect, useState} from 'react'
import { taskAPI } from '../api/task-api';

export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '67849511-8efb-4439-b87b-3faaa0803469'
        taskAPI.getTasks(todolistId).then((res) => {
            // console.log(res.data)
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '67849511-8efb-4439-b87b-3faaa0803469'
        const title = 'Learn JS'
        taskAPI.createTask(todolistId, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '67849511-8efb-4439-b87b-3faaa0803469'
        const taskId = 'd21f90a4-9664-4d43-981e-a1d7c5f5eed5'
        taskAPI.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '67849511-8efb-4439-b87b-3faaa0803469'
        const taskId = '6b2a1fa6-86fe-4979-b61c-dc368d0da4e4'
        const title = 'Change React'
        taskAPI.updateTask(todolistId, taskId, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

