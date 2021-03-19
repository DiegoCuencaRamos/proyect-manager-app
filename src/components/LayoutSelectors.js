import React from 'react'

const LayoutSelectors = ({ handleLayoutChange }) => {
    
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

    const onLayoutChange = e => {
        const layoutData = e.target.dataset.layout
        handleLayoutChange(layoutData)
    }

    return (
        <section className="layout-selector">
            <div className="container">
                <div className="layout-selector__wrapper" onClick={onAddClass}>
                    <div 
                        id="selectorItem1"
                        className="layout-selector__item" 
                        onClick={onLayoutChange}
                        data-layout="list"
                    >
                        <i className="fas fa-list-ul"></i>
                        <span>List</span>
                    </div>
                    <div 
                        id="selectorItem2"
                        className="layout-selector__item" 
                        onClick={onLayoutChange}
                        data-layout="calendar"
                    >
                        <i className="fas fa-calendar-alt"></i>
                        <span>Calendar</span>
                    </div>
                    <div 
                        id="selectorItem3"
                        className="layout-selector__item" 
                        onClick={onLayoutChange}
                        data-layout="kanban"
                    >
                        <i className="fas fa-columns"></i>
                        <span>Kanban</span>
                    </div>                       
                </div>
            </div>
        </section>
    )
}

export default LayoutSelectors