import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import DashboardContext from '../../contexts/dashboard-context'
import { sortByFilterChanged } from '../../actions/filter'

const ListHeader = () => {
    // Variables
    const isProyect = useContext(DashboardContext)
    const dispatch = useDispatch()

    // Events
    const onSortByName = () => {
        dispatch(sortByFilterChanged('name'))
    }

    const onSortByInvoice = () => {
        dispatch(sortByFilterChanged('invoice'))
    }   

    // Render
    return (
        <div className="list__header">
            <div className="list__header-item">
                <div className="list__name" onClick={onSortByName}>
                    <span>Name</span>
                    <i className="fas fa-sort-down"></i>
                </div>
                { isProyect && <p className="list__status">Status</p> }
                <div className="list__invoice" onClick={onSortByInvoice}>
                    <span>Invoice</span>
                    <i className="fas fa-sort-down"></i>
                </div>
                <p className="list__dropdown">Options</p>
            </div>   
        </div>   
    )
}

export default ListHeader