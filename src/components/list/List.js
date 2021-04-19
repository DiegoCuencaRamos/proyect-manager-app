import React, { useContext, useReducer, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ProjectContext } from '../../contexts/ProjectContext'
import { ListContext } from '../../contexts/ListContext'
import getFilteredItems from '../../selectors/getFilteredItems'
import ListFilters from './ListFilters'
import ListTable from './ListTable'
import Pagination from '../pagination/Pagination'
import { setCurrectPage } from '../../actions/list'

const List = () => {    
    // 1. Context
    const isProyect = useContext(ProjectContext)
    const {
        textFilter,
        setTextFilter, 
        sortBy, 
        setSortBy, 
        currentPage, 
        setCurrentPage, 
        pageLimit, 
        setPageLimit 
    } = useContext(ListContext)

    console.log(setCurrectPage)

    // 2. ProyectId
    const proyectId = isProyect ? null : useParams().proyectId
    // 3. Data
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])
    const filteredItems = getFilteredItems(proyectId, items, currentPage, pageLimit, textFilter, sortBy)

    // 4. Events
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

    // 5. Render
    return (
        <div className="list">
            <div className="container">
                <ListFilters 
                    textFilter={textFilter}
                    onTextFilterChange={onTextFilterChange}
                />
                <ListTable 
                    filteredItems={filteredItems}
                    onSortByChange={onSortByChange}
                />
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

// // 3. State    
// const [textFilter, setTextFilter] = useState('')
// const [sortBy, setSortBy] = useState('')
// const [currentPage, setCurrentPage] = useState(1)
// const [pageLimit, setPageLimit] = useState(5)