import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChanged, sortByFilterChanged, visualizeModeFilterChanged } from '../actions/filter'

const FiltersList = () => {
    const { searchText, sortBy, visualizeMode } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        <section>
            <input 
                type="text"
                value={searchText}
                onChange={e => dispatch(searchFilterChanged(e.target.value))}
            />
            <select 
                value={sortBy}
                onChange={e => dispatch(sortByFilterChanged(e.target.value))}
            >
                <option value="" disabled>Sort by</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>
            <select 
                value={visualizeMode}
                onChange={e => dispatch(visualizeModeFilterChanged(e.target.value))}
            >
                <option value="" disabled>Visualize mode</option>
                <option value="list">List</option>
                <option value="scheduler">Scheduler</option>
                <option value="kanban">Kanban</option>
            </select>
        </section>
    )
}

export default FiltersList