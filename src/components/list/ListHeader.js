import React, { useContext } from 'react'
import DashboardContext from '../../contexts/ProjectContext'

const ListHeader = ({ onSortByChange }) => {
    // Variables
    const isProyect = useContext(DashboardContext)

    // Events
    const onSortByName = () => {
        onSortByChange('name')
    }

    const onSortByInvoice = () => {
        onSortByChange('invoice')
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