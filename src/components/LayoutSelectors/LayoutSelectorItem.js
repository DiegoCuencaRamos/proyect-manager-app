import React from 'react'

const LayoutSelectorItem = ({ handleLayoutChange, dataLayout, icon }) => {
    // 1. Event
    const onLayoutChange = e => {
        const layoutData = e.target.dataset.layout
        handleLayoutChange(layoutData)
    }
    
    // 2. Render
    return (
        <div 
            className="layout-selector__item" 
            onClick={onLayoutChange}
            data-layout={dataLayout}
        >
            <i className={icon}></i>
            <span>{dataLayout}</span>
        </div>
    )
}

export default LayoutSelectorItem