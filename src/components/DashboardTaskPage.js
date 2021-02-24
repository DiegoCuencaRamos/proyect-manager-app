import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Title from './Title'
import FiltersList from './FiltersList'
import ItemList from './ItemList'
import KanbanBoard from './KanbanBoard'


const DashboardTasktPage = () => {
    const visualizeMode = useSelector(state => state.filters.visualizeMode)
    let itemsLayout = <ItemList />

    if (visualizeMode === 'list') {
        itemsLayout = <ItemList />
    } else if (visualizeMode === 'kanban') {
        itemsLayout = <KanbanBoard />
    } else if (visualizeMode === 'schedule') {
        
    }

    return (
        <section>
            <div className="page-title">
                <Title 
                    title={'Task Dashboard'} 
                    description={'From here you will be able to visualize your task with in the chosen proyect'}
                />
                <Link to="/add-task" >Add task</Link>
            </div>
            <br />
            <hr />
            <br />

            <FiltersList />
            {itemsLayout}
        </section>
)}

export default DashboardTasktPage