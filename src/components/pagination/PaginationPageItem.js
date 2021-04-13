import React from 'react'

const PaginationPageItem = ({ page, currentPage, totalPages, pageNeighbours, onPageChange }) => {
    // Events
    const onLenftPageClick = (e) => {
        e.preventDefault()
        onPageChange(Math.max(1, currentPage - (pageNeighbours * 2) - 1))
    }

    const onRightPageClick = (e) => {
        e.preventDefault()
        onPageChange(Math.min(totalPages, currentPage + (pageNeighbours * 2) + 1))
    }

    const onPageClick = (e) => {
        e.preventDefault()
        onPageChange(page)
    }

    // Render
    if(page === 'left') {
        return (
            <li>
                <a onClick={onLenftPageClick}>{'<<'}</a>
            </li>
        )
    } else if (page === 'right') {
        return (
            <li >
                <a onClick={onRightPageClick}>{'>>'}</a>
            </li>
        )
    } else {
        return (
            <li>
                <a
                    className={currentPage === page ? 'pagination__active-page' : ''}
                    onClick={onPageClick}
                >{page}</a>
            </li>
        )
    }    
}

export default PaginationPageItem