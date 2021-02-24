import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ReadTaskPage = () => {
    const tasks = useSelector(state => state.tasks)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)

    return (
        <section>
            <h1>{task.name}</h1>
            <p>{task.status}</p>
            <p>{task.description}</p>
        </section>
)}

export default ReadTaskPage