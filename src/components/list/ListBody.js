import React from 'react'
import ListItem from './ListItem'

const ListBody = ({ currentItems }) => (
    <div className="list__body">
        {currentItems.map(item => (
            <ListItem key={item.id} {...item} />
        ))}
    </div>
)

export default ListBody