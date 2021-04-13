import React from 'react'

const PaginationFilter = ({ pageLimit, onPageLimitChange }) => {
    // Events
    const onSelectChange = e => {
        const value = e.target.value
        onPageLimitChange(value)
    }

    // Render
    return (
        <div className="pagination__limit">
            <select 
                className="filters__item" 
                value={pageLimit} 
                onChange={onSelectChange}
            >
                <option value="2">2 items</option>
                <option value="5">5 items</option>
                <option value="10">10 items</option>
                <option value="20">20 items</option>
            </select>
        </div>
    )
}

export default PaginationFilter