import React, { useContext } from 'react'
import DashboardContext from '../../contexts/ProjectContext'
import ListHeader from './ListHeader'
import ListBody from './ListBody'

const ListTable = ({ filteredItems }) => {
    // 1. Context
    const isProyect = useContext(DashboardContext)    
    
    // 2. Render
    return (
        <div className={isProyect ? "list__proyect-table" : "list__task-table"}>
            <ListHeader />
            <ListBody 
                currentItems={filteredItems} 
            />                  
        </div>
    )
}

export default ListTable