import React, { useState } from 'react'
import ProjectContextProvider from '../contexts/ProjectContext'
import Title from './Title'
import ItemsLayout from './ItemsLayout'
import LayoutSelectors from './LayoutSelectors/LayoutSelectors'

const DashboardProyectPage = () => {
    // State
    const [ layout, setLayout ] = useState('list')

    // Events
    const handleLayoutChange = currentLayout => {
        setLayout(currentLayout)
    }

    // Render
    return (
        <ProjectContextProvider>
            <Title 
                title={'Proyect Dashboard'} 
                description={'From here you will be able to visualice all your proyects'}
                isDashboard={true}
            />
            <LayoutSelectors handleLayoutChange={handleLayoutChange} />
            <ItemsLayout layout={layout} />
        </ProjectContextProvider>
    )
}

export default DashboardProyectPage