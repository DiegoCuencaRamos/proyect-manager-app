import React, { useContext } from 'react'
import DashboardContext from '../../contexts/dashboard-context'

const ListHeader = () => {
    // Context
    const isProyect = useContext(DashboardContext)
    
    // Render
    return (
        <div className="list__header">
            <div className="list__header-item">
                {isProyect && <p className="list__logo">Logo</p>}
                <p className="list__name">Name</p>
                <p className="list__status">Status</p>
                <p className="list__invoice">Invoice</p>
                <p className="list__dropdown">Options</p>
            </div>   
        </div>   
    )
}

export default ListHeader