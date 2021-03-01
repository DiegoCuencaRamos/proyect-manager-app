import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Title from './Title'
import FiltersList from './FiltersList'
import ItemList from './ItemList'
import KanbanBoard from './KanbanBoard'

const DashboardProyectPage = () => {
    const visualizeMode = useSelector(state => state.filters.visualizeMode)
    let itemsLayout = <ItemList isProyect={true} />

    if (visualizeMode === 'list') {
        itemsLayout = <ItemList isProyect={true} />
    } else if (visualizeMode === 'kanban') {
        itemsLayout = <KanbanBoard isProyect={true}/>
    } else if (visualizeMode === 'schedule') {
        
    }

    return (
        <section>
            <Title 
                title={'Proyect Dashboard'} 
                description={'From here you will be able to visualice all your proyects'}
                isDashboard={true}
                isProyect={true}
            />
            <FiltersList />
            {itemsLayout}
        </section>
    )
}

export default DashboardProyectPage