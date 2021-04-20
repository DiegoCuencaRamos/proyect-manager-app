import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ReadTaskPage = () => {
    // 1. Get data
    const { taskId } = useParams()
    const tasks = useSelector(state => state.tasks)
    const task = tasks.find(task => task.id === taskId)

    // 2. Render
    return (
        <section className="read-page">
            <div className="container">
                <h1 className="read-page__title">{task.name}</h1>
                <p className="read-page__status">{task.status}</p>
                <p className="read-page__text">{task.description}</p>
                <Link
                    to="/dashboard"
                    className="read-page__link"
                >Go back to home page</Link>
            </div>
        </section>
    )
}

export default ReadTaskPage