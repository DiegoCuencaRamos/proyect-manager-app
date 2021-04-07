import React, { useState } from 'react'
import Title from './Title'
import ItemsLayout from './ItemsLayout'
import DashboardContext from '../contexts/dashboard-context'
import LayoutSelectors from './LayoutSelectors'

const DashboardProyectPage = () => {
    // Variables
    const isProyect = true
    const [ layout, setLayout ] = useState('list')

    // Events
    const handleLayoutChange = currentLayout => {
        setLayout(currentLayout)
    }

    // Render
    return (
        <DashboardContext.Provider value={{ isProyect }}>
            <section>
                <Title 
                    title={'Proyect Dashboard'} 
                    description={'From here you will be able to visualice all your proyects'}
                    isDashboard={true}
                />
                <LayoutSelectors handleLayoutChange={handleLayoutChange} />
                <ItemsLayout layout={layout} />
            </section>
        </DashboardContext.Provider>
    )
}

export default DashboardProyectPage