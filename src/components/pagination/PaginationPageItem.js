import React, { useContext } from 'react'
import { ListContext } from '../../contexts/ListContext'

const PaginationPageItem = ({ page, totalPages, pageNeighbours}) => {
    // 1. Context
    const { currentPage, setCurrentPage } = useContext(ListContext)
    
    // 2.Events
    const onLenftPageClick = (e) => {
        e.preventDefault()
        setCurrentPage(Math.max(1, currentPage - (pageNeighbours * 2) - 1))
    }

    const onRightPageClick = (e) => {
        e.preventDefault()
        setCurrentPage(Math.min(totalPages, currentPage + (pageNeighbours * 2) + 1))
    }

    const onPageClick = (e) => {
        e.preventDefault()
        setCurrentPage(page)
    }

    // 3.Render
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