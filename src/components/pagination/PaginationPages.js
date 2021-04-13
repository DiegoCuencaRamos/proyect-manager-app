import React from 'react'
import PaginationPageItem from './PaginationPageItem'

const PaginationPages = ({ pages, currentPage, totalPages, pageNeighbours, onPageChange }) => (
    <nav className="pagination__pages">
        <ul>
            {pages.map(page => (
                <PaginationPageItem
                    page={page}
                    currentPage={currentPage}
                    totalPages={totalPages} 
                    pageNeighbours={pageNeighbours} 
                    onPageChange={onPageChange}
                />
            ))}
        </ul>
    </nav>
)

export default PaginationPages