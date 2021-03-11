import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChanged, sortByFilterChanged } from '../../actions/filter'

const ListFilters = () => {
    const { searchText, sortBy } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        <section className="filters">
            <div className="container">
                <div className="filters__content">
                    <input 
                        className="filters__item"
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={e => dispatch(searchFilterChanged(e.target.value))}
                    />                       
                </div>
            </div>
        </section>
    )
}

export default ListFilters