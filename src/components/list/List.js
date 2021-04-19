import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
// Contexts
import { ProjectContext } from '../../contexts/ProjectContext'
import { ListContext } from '../../contexts/ListContext'
// Selector
import getFilteredItems from '../../selectors/getFilteredItems'
// Components
import ListFilters from './ListFilters'
import ListTable from './ListTable'
import Pagination from '../pagination/Pagination'

const List = () => {    
    // 1. Context
    const isProyect = useContext(ProjectContext)
    const { textFilter, sortBy, currentPage, pageLimit} = useContext(ListContext)
    // 2. ProyectId
    const proyectId = isProyect ? null : useParams().proyectId
    // 3. Data
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])
    const filteredItems = getFilteredItems(proyectId, items, currentPage, pageLimit, textFilter, sortBy)

    // 5. Render
    return (
        <div className="list">
            <div className="container">
                <ListFilters />
                <ListTable 
                    filteredItems={filteredItems}
                />
                <Pagination 
                    totalItems={items.length} 
                    pageNeighbours={1}
                />
            </div>
        </div>
    )
}

export default List