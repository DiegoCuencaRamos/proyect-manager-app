import React from 'react'

const PaginationRightArrow = ({ totalPages, currentPage, goToPage }) => {
    // Events
    const onRightArrowClick = () => {
        goToPage(Math.min(totalPages, currentPage + 1))
    }


    return (
        <li>
            <i 
                class="fas fa-long-arrow-alt-right"
                onClick={onRightArrowClick}
            ></i>
        </li>
    )
}

export default PaginationRightArrow