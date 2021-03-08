import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import DashboardContext from '../../contexts/dashboard-context'
import getVisibleProyects from '../../selectors/proyects'
import getVisibleTasks from '../../selectors/tasks'
import ListFilters from './ListFilters'
import ListHeader from './ListHeader'
import ListBody from './ListBody'
import Pagination from './Pagination'


const List = () => {
    // Context
    const isProyect = useContext(DashboardContext)
    // Variables
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ]) 
    // const filters = useSelector(state => state.filters)
    // const proyectId = isProyect ? undefined : useSelector(state => state.ids.proyectId)
    // const filteredItems = isProyect ? getVisibleProyects(items, filters) : getVisibleTasks(proyectId, items, filters)
    // State 
    const [ currentItems, setCurrentItems ] = useState([]) 

    // Events
    const onPageChange = (data) => {
        const { currentPage, pageLimit } = data
        const startItem = (currentPage - 1) * pageLimit
        const endItem = currentPage * pageLimit
        const currentItems = items.slice(startItem, endItem)

        setCurrentItems(currentItems)
    }

    // Render
    return (
        <div className="list">
            <div className="container">
                <ListFilters />
                <div className="list__table">
                    <ListHeader />
                    <ListBody currentItems={currentItems} />                    
                </div>
                <Pagination 
                    totalItems={items.length} 
                    pageLimit={3} 
                    onPageChange={onPageChange}
                    pageNeighbours={1}
                />
            </div>
        </div>
    )
}

export default List