import React from 'react'
import LayoutSelectorItem from './LayoutSelectorItem'

const LayoutSelectors = ({ handleLayoutChange }) => {
    // 1. Event
    const onAddClass = (e) => {
        const target = e.target
        const layoutSelectorItems = document.querySelectorAll('.layout-selector__item')
        const selectedClass = 'layout-selector__item--selected'
        
        layoutSelectorItems.forEach(item => {
            if(
                item === target 
                && !item.classList.contains(selectedClass)
            ) {
                item.classList.add(selectedClass)
            } else if (
                item === target 
                && item.classList.contains(selectedClass)
            ) {
                // Do nothing
            } else {
                item.classList.remove(selectedClass)
            }
        })
    }
    
    //2. Render
    return (
        <section className="layout-selector">
            <div className="container">
                <div className="layout-selector__wrapper" onClick={onAddClass}>
                    <LayoutSelectorItem 
                        handleLayoutChange={handleLayoutChange}
                        dataLayout="list"
                        icon="fas fa-list-ul"
                    />
                    <LayoutSelectorItem 
                        handleLayoutChange={handleLayoutChange}
                        dataLayout="calendar"
                        icon="fas fa-calendar-alt"
                    />
                    <LayoutSelectorItem 
                        handleLayoutChange={handleLayoutChange}
                        dataLayout="kanban"
                        icon="fas fa-columns"
                    />                      
                </div>
            </div>
        </section>
    )
}

export default LayoutSelectors