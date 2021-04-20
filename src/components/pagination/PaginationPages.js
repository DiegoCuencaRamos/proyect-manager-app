import React from 'react'
import PaginationPageItem from './PaginationPageItem'

const PaginationPages = ({ pages, totalPages, pageNeighbours }) => (
    <nav className="pagination__pages">
        <ul>
            {pages.map((page, index) => (
                <PaginationPageItem
                    key={index}
                    page={page}
                    totalPages={totalPages} 
                    pageNeighbours={pageNeighbours} 
                />
            ))}
        </ul>
    </nav>
)

export default PaginationPages