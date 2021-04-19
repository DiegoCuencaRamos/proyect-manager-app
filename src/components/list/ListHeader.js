import React, { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { ListContext } from '../../contexts/ListContext'

const ListHeader = () => {
    // Variables
    const isProyect = useContext(ProjectContext)
    const { setSortBy } = useContext(ListContext)

    // Events
    const onSortByName = () => {
        setSortBy('name')
    }

    const onSortByInvoice = () => {
        setSortBy('invoice')
    }   

    // Render
    return (
        <div className="list__header">
            <div className="list__header-item">
                <div className="list__name" onClick={onSortByName}>
                    <span>Name</span>
                    <i className="fas fa-sort-down"></i>
                </div>
                <p className="list__status">Status</p>
                { isProyect && <div className="list__invoice" onClick={onSortByInvoice}>
                    <span>Invoice</span>
                    <i className="fas fa-sort-down"></i>
                </div> }
                <p className="list__dropdown">Options</p>
            </div>   
        </div>   
    )
}

export default ListHeader