import React from 'react'

const PaginationRightArrow = ({ totalPages, currentPage, goToPage }) => (
    <li>
        <a onClick={(e) => {
            e.preventDefault()
            goToPage(Math.min(totalPages, currentPage + 1))
        }}>{'>'}</a>
    </li>
)

export default PaginationRightArrow