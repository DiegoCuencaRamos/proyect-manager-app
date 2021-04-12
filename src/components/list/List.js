import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DashboardContext from '../../contexts/dashboard-context'
import getVisibleProyects from '../../selectors/proyects'
import getVisibleTasks from '../../selectors/tasks'
import ListFilters from './ListFilters'
import ListHeader from './ListHeader'
import ListBody from './ListBody'
import Pagination from '../pagination/Pagination'


const List = () => {
    // Context
    const isProyect = useContext(DashboardContext)
    // Variables
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ]) 
    const filters = useSelector(state => state.filters)
    const proyectId = isProyect ? undefined : useSelector(state => state.ids.proyectId)
    const filteredItems = isProyect ? getVisibleProyects(items, filters) : getVisibleTasks(proyectId, items, filters)
    // State 
    const [ currentItems, setCurrentItems ] = useState([])
    const [ pageLimit, setPageLimit ] = useState(5) // Este puede ir en el calendar también, estoy probando.

    useEffect(() => {
        setCurrentItems(filteredItems)
    }, [items])

    console.log('1: ', filteredItems)

    // Events
    const onItemsChange = (data) => {
        const { currentPage, pageLimit } = data
        const startItem = (currentPage - 1) * pageLimit
        const endItem = currentPage * pageLimit
        const currentItems = filteredItems.slice(startItem, endItem)

        console.log('2: ', filteredItems)

        setCurrentItems(currentItems)
    }

    const onPageLimitChange = (pageLimit) => {
        setPageLimit(pageLimit)
    }

    // Render
    return (
        <div className="list">
            <div className="container">
                <ListFilters />
                <div className="list__table">
                    <ListHeader />
                    <ListBody currentItems={currentItems} />  
                    <Pagination 
                        filteredItems={filteredItems}
                        totalItems={filteredItems.length} 
                        pageLimit={pageLimit}
                        onPageLimitChange={onPageLimitChange}
                        onItemsChange={onItemsChange}
                        pageNeighbours={1}
                    />                  
                </div>
            </div>
        </div>
    )
}

export default List