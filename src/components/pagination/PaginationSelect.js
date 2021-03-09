import React from 'react'

const PaginationSelect = ({ pageLimit, onPageLimitChange, totalItems }) => {
    // Events
    const onSelectChange = e => {
        const value = e.target.value
        if (value !== 'all') {
            onPageLimitChange(value)
        } else {
            onPageLimitChange(totalItems)
        }
    }
    
    // Render
    return (
        <div className="pagination__limit">
            <span>Items per page:</span>
            <select value={pageLimit} onChange={onSelectChange}>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="all">All</option>
            </select>
        </div>
    )
}

export default PaginationSelect