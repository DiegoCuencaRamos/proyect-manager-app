import React, { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import ListHeader from './ListHeader'
import ListBody from './ListBody'

const ListTable = ({ filteredItems }) => {
    // 1. Context
    const isProyect = useContext(ProjectContext)    
    
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