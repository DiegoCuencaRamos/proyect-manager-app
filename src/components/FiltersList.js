import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChanged, sortByFilterChanged, visualizeModeFilterChanged } from '../actions/filter'

const FiltersList = () => {
    const { searchText, sortBy, visualizeMode } = useSelector(state => state.filters)
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
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <div className="filters__content">
                        <select 
                            className="filters__item"
                            value={visualizeMode}
                            onChange={e => dispatch(visualizeModeFilterChanged(e.target.value))}
                        >
                            <option value="" disabled>Visualize mode</option>
                            <option value="list">List</option>
                            <option value="scheduler">Scheduler</option>
                            <option value="kanban">Kanban</option>
                        </select>
                    </div>
                        
                </div>
            </div>
        </section>
    )
}

export default FiltersList