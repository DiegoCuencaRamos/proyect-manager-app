import React, { useContext } from 'react'
import { ListContext } from '../../contexts/ListContext'


const PaginationFilter = () => {
    // 1. Variables
    const {
        pageLimit,
        setPageLimit,
    } = useContext(ListContext)

    // 2. Events
    const onSelectChange = e => {
        const value = e.target.value
        setPageLimit(value)
    }

    // 3. Render
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