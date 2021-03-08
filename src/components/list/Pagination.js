import React, { useEffect, useState } from 'react'

const range = (from, to) => {
    const range = []    
    for(let i = from; i <= to; i++) {
        range.push(i)
    }
    return range
}

const Pagination = ({ totalItems = null, pageLimit = 10, onPageChange, pageNeighbours = 1 }) => {
    // Variables
    const totalPages = Math.ceil(totalItems / pageLimit)
    const [currentPage, setCurrentPage] = useState(1)

    const getPages = () => {
        const totalNumbers = (pageNeighbours * 2) + 3 // pageNeighbours + currentPage + startPage + endPage
        const totalBlocks = totalNumbers + 2 // For the arrows

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
        onPageChange(paginationData)
    }

    useEffect(() => {
        goToPage(1)
    }, [])



    return (
        <nav className="list-pagination">
            <ul>
                {/*<li key={'left-pagination-arrow'}>
                    <a onClick={(e) => {
                        e.preventDefault()
                        goToPage(currentPage - 1)
                    }}>{'<'}</a>
                </li>*/}
                {
                    pages.map(page => {
                        if(page === 'left') {
                            return (
                                <li key={page}>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        goToPage(Math.max(1, currentPage - (pageNeighbours * 2) - 1))
                                    }}>...</a>
                                </li>
                            )
                        } else if (page === 'right') {
                            return (
                                <li key={page}>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        goToPage(Math.min(totalPages, currentPage + (pageNeighbours * 2) + 1))
                                    }}>...</a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={page}>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        goToPage(page)
                                    }}>{page}</a>
                                </li>
                            )
                        }    
                    })
                }
                {/*<li key={'right-pagination-arrow'}>
                    <a onClick={(e) => {
                        e.preventDefault()
                        goToPage(currentPage + 1)
                    }}>{'>'}</a>
                </li>*/} 
           </ul> 
        </nav>
    )
}

export default Pagination