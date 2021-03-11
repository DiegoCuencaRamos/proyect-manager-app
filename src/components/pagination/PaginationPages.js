import React, { useEffect } from 'react'
import PaginationLeftArrow from './PaginationLeftArrow'
import PaginationPageItem from './PaginationPageItem'
import PaginationRightArrow from './PaginationRightArrow'

const PaginationPages = ({ pages, currentPage, setCurrentPage, pageLimit, totalPages, pageNeighbours, onItemsChange }) => {
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
                {false /*<PaginationLeftArrow 
                    currentPage={currentPage}
                    goToPage={goToPage}
                />*/}
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
                {false /*<PaginationRightArrow 
                    totalPages={totalPages}
                    currentPage={currentPage}
                    goToPage={goToPage}
                />*/}
            </ul> 
        </nav>
    )
    
}

export default PaginationPages