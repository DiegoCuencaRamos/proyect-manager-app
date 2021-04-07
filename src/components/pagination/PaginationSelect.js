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
            <select className="filters__item" value={pageLimit} onChange={onSelectChange}>
                <option value="2">2 rows</option>
                <option value="5">5 rows</option>
                <option value="10">10 rows</option>
                <option value="all">All rows</option>
            </select>
        </div>
    )
}

export default PaginationSelect