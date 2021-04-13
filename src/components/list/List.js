import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DashboardContext from '../../contexts/dashboard-context'
import getFilteredItems from '../../selectors/getFilteredItems'
import ListFilters from './ListFilters'
import ListHeader from './ListHeader'
import ListBody from './ListBody'
import Pagination from '../pagination/Pagination'

const List = () => {
    // 1. Context
    const isProyect = useContext(DashboardContext)
    // 2. ProyectId
    const proyectId = isProyect ? null : useParams().proyectId
    // 2. Data
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])
    // 3. State    
    const [currentPage, setCurrentPage] = useState(1)
    const [pageLimit, setPageLimit] = useState(5)
    const [textFilter, setTextFilter] = useState('')
    const [sortBy, setSortBy] = useState('')

    const filteredItems = getFilteredItems(proyectId, items, currentPage, pageLimit, textFilter, sortBy)

    // Events
    const onTextFilterChange = (text) => {
        setTextFilter(text)
    }

    const onSortByChange = (value) => {
        setSortBy(value)
    }

    const onPageLimitChange = (pageLimit) => {
        setPageLimit(pageLimit)
    }

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    // Render
    return (
        <div className="list">
            <div className="container">
                <ListFilters 
                    textFilter={textFilter}
                    onTextFilterChange={onTextFilterChange}
                />
                <div className={isProyect ? "list__proyect-table" : "list__task-table"}>
                    <ListHeader
                        onSortByChange={onSortByChange}
                    />
                    <ListBody 
                        currentItems={filteredItems} 
                    />                  
                </div>
                <Pagination 
                    totalItems={items.length} 
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    // Filter event
                    onPageLimitChange={onPageLimitChange}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    )
}

export default List