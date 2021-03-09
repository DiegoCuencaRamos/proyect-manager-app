import React from 'react'

const PaginationLeftArrow = ({ currentPage, goToPage }) => (
    <li>
        <a onClick={(e) => {
            e.preventDefault()
            goToPage(Math.max(1, currentPage - 1))
        }}>{'<'}</a>
    </li>
)

export default PaginationLeftArrow