import React, {useContext} from 'react'
import { range } from './utils'
import { ListContext } from '../../contexts/ListContext'
import PaginationFiter from './PaginationFiter'
import PaginationPages from './PaginationPages'

const Pagination = ({ totalItems, pageNeighbours}) => {
    // 1. Variables
    const { pageLimit, currentPage } = useContext(ListContext)
    const totalPages = Math.ceil(totalItems / pageLimit)

    // 2. Get pages Array
    const getArrayPages = () => {
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

    const pages = getArrayPages()

    // 3. Render
    return (
        <div className="pagination">
            <PaginationFiter />
            <PaginationPages
                pages={pages}
                totalPages={totalPages} 
                pageNeighbours={pageNeighbours} 
            />
        </div>
    )
}

export default Pagination