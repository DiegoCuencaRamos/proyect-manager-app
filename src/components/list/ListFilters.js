import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChanged, sortByFilterChanged } from '../../actions/filter'

const ListFilters = () => {
    const { searchText, sortBy } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        <section className="filters">
            <div className="container">
                <div className="filters__wrapper">
                    <div className="filters__content">
                        <input 
                            className="filters__item"
                            type="text"
                            placeholder="Serach"
                            value={searchText}
                            onChange={e => dispatch(searchFilterChanged(e.target.value))}
                        />
                        <select 
                            className="filters__item"
                            value={sortBy}
                            onChange={e => dispatch(sortByFilterChanged(e.target.value))}
                        >
                            <option value="" disabled>Sort by</option>
                            <option value="name">Name</option>
                            <option value="invoiced">Invoiced</option>
                            <option value="start-date">Start date</option>
                        </select>
                    </div>                        
                </div>
            </div>
        </section>
    )
}

export default ListFilters