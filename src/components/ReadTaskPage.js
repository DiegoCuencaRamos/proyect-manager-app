import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ReadTaskPage = () => {
    const tasks = useSelector(state => state.tasks)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)

    return (
        <section className="read-page">
            <div className="container">
                <h1 className="read-page__title">{task.name}</h1>
                <p className="read-page__status">{task.status}</p>
                <p className="read-page__text">{task.description}</p>
            </div>
        </section>
)}

export default ReadTaskPage