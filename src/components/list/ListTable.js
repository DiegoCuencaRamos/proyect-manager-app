import React, { useContext } from 'react'
import DashboardContext from '../../contexts/ProjectContext'
import ListHeader from './ListHeader'
import ListBody from './ListBody'

const ListTable = ({ filteredItems, onSortByChange }) => {
    // 1. Context
    const isProyect = useContext(DashboardContext)    
    
    // 3. Render
    return (
        <div className={isProyect ? "list__proyect-table" : "list__task-table"}>
            <ListHeader
                onSortByChange={onSortByChange}
            />
            <ListBody 
                currentItems={filteredItems} 
            />                  
        </div>
    )
}

export default ListTable