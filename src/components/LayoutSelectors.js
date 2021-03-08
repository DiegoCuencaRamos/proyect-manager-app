import React from 'react'

const LayoutSelectors = ({ handleLayoutChange }) => {
    
    const onLayoutChange = e => {
        handleLayoutChange(e.target.dataset.layout)
    }

    return (
        <section className="layout-selector">
            <div className="container">
                <div className="layout-selector__wrapper">
                    <div className="layout-selector__item">
                        <i>{'>'}</i>
                        <span data-layout="list" onClick={onLayoutChange}>List</span>
                    </div>
                    <div className="layout-selector__item">
                        <i>{'>'}</i>
                        <span data-layout="calendar" onClick={onLayoutChange}>Calendar</span>
                    </div>
                    <div className="layout-selector__item">
                        <i>{'>'}</i>
                        <span data-layout="kanban" onClick={onLayoutChange}>Kanban</span>
                    </div>                       
                </div>
            </div>
        </section>
    )
}

export default LayoutSelectors