import React, { useState } from 'react'
import Title from './Title'
import LayoutSelectors from './LayoutSelectors'
import ItemsLayout from './ItemsLayout'

const DashboardTasktPage = () => {
    // State
    const [ layout, setLayout ] = useState('')

    // Events
    const handleLayoutChange = currentLayout => {
        setLayout(currentLayout)
    }

    // Render
    return (
        <section>
            <Title 
                title={'Task Dashboard'} 
                description={'From here you will be able to visualize your task with in the chosen proyect'}
                isDashboard={true}
            />
            <LayoutSelectors handleLayoutChange={handleLayoutChange} />
            <ItemsLayout layout={layout} />
        </section>
)}

export default DashboardTasktPage