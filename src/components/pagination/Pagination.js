import React, { useEffect, useState } from 'react'
import PaginationPages from './PaginationPages'
import PaginationSelect from './PaginationSelect'

const Pagination = ({ totalItems = null, pageLimit, onPageLimitChange, pageNeighbours = 1, onItemsChange }) => {
    // Variables
    const [currentPage, setCurrentPage] = useState(1)
    
    // const totalPagesCalc = Math.ceil(totalItems / pageLimit)
    const [ totalPages, setTotalPages ] = useState(Math.ceil(totalItems / pageLimit))

    useEffect(() => {
        const currentPage = 1
        const paginationData = {
            currentPage,
            // totalPages,
            pageLimit,
            // totalRecords
        }
        setTotalPages(Math.ceil(totalItems / pageLimit))
        setCurrentPage(currentPage)
        onItemsChange(paginationData)
    }, [pageLimit])


    // Functionality
    const range = (from, to) => {
        const range = []    
        for(let i = from; i <= to; i++) {
            range.push(i)
        }
        return range
    }

    const getPages = () => {
        const totalNumbers = (pageNeighbours * 2) + 3 // pageNeighbours + (currentPage + startPage + endPage)
        const totalBlocks = totalNumbers + 2 // For arrows

        const startPage = Math.max(2, currentPage - pageNeighbours)
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
        let pages = range(startPage, endPage)

        if(totalPages > totalBlocks) {
            const hasLeftSpill = startPage > 2
            const hasRightSpill = (totalPages - endPage) > 1
            const leftPage = 'left'
            const rightPage = 'right'

            // handle: (1) < {4} [5] {6} (7)
            if (hasLeftSpill && !hasRightSpill) {
                pages = [leftPage, ...pages]
            } 
            // handle: (1) {2} [3] {4} > (7)
            else if (hasRightSpill && !hasLeftSpill) {
                pages = [...pages, rightPage]
            }
            // handle: (1) < {3} [4] {5} > (7)
            else {
                pages = [leftPage, ...pages, rightPage]
            }
            return [1, ...pages, totalPages]
        }

        return range(1, totalPages) // Pages array
    }

    const pages = getPages()

    // Render
    return (
        <div className="pagination">
            <PaginationPages 
                pages={pages} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageLimit={pageLimit}
                totalPages={totalPages}
                pageNeighbours={pageNeighbours}
                onItemsChange={onItemsChange}
            />
            <PaginationSelect 
                pageLimit={pageLimit}
                onPageLimitChange={onPageLimitChange}
                totalItems={totalItems}
                totalPages={totalPages}
            />
        </div>

    )
}

export default Pagination