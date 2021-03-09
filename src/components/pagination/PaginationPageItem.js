import React from 'react'

const PaginationPageItem = ({ page, currentPage, totalPages, pageNeighbours, goToPage }) => {
    if(page === 'left') {
        return (
            <li>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToPage(Math.max(1, currentPage - (pageNeighbours * 2) - 1))
                }}>...</a>
            </li>
        )
    } else if (page === 'right') {
        return (
            <li >
                <a onClick={(e) => {
                    e.preventDefault()
                    goToPage(Math.min(totalPages, currentPage + (pageNeighbours * 2) + 1))
                }}>...</a>
            </li>
        )
    } else {
        return (
            <li>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToPage(page)
                }}>{page}</a>
            </li>
        )
    }    
}

export default PaginationPageItem