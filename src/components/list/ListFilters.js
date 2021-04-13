import React from 'react'

const ListFilters = ({ textFilter, onTextFilterChange }) => {

    const onTextChange = (e) => {
        const text = e.target.value
        onTextFilterChange(text)
    } 

    // Render
    return (
        <section className="filters">
            <div className="container">
                <div className="filters__content">
                    <input 
                        className="filters__item"
                        type="text"
                        placeholder="Search"
                        value={textFilter}
                        onChange={onTextChange}
                    />                       
                </div>
            </div>
        </section>
    )
}

export default ListFilters