import React, { useEffect } from 'react'
import PaginationPageItem from './PaginationPageItem'

const PaginationPages = ({ filteredItems, pages, currentPage, setCurrentPage, pageLimit, totalPages, pageNeighbours, onItemsChange }) => {
    // Events
    const goToPage = (page) => {
        const currentPage = page
        const paginationData = {
            currentPage,
            // totalPages,
            pageLimit,
            // totalRecords
        }
        setCurrentPage(currentPage)
        onItemsChange(paginationData)
    }

    useEffect(() => {
        goToPage(1)
    }, [])

    // Render
    return (
        <nav className="pagination__pages">
            <ul>
                {pages.map(page => (
                    <PaginationPageItem 
                        key={page}
                        page={page}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        pageNeighbours={pageNeighbours}
                        goToPage={goToPage}
                    />
                ))}
            </ul> 
        </nav>
    )
    
}

export default PaginationPages