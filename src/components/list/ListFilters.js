import React, { useContext } from 'react'
import { ListContext } from '../../contexts/ListContext'

const ListFilters = () => {
    const { textFilter, setTextFilter } = useContext(ListContext)

    const onTextChange = (e) => {
        const text = e.target.value
        setTextFilter(text)
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