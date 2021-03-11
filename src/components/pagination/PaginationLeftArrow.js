import React from 'react'

const PaginationLeftArrow = ({ currentPage, goToPage }) => {
    // Events
    const onLeftArrowClick = () => {
        goToPage(Math.max(1, currentPage - 1))
    }

    // Render
    return (
        <li>
            <i 
                class="fas fa-long-arrow-alt-left"
                onClick={onLeftArrowClick}
            ></i>
        </li>
    )
}

export default PaginationLeftArrow