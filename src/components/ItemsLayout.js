import React from 'react'
import List from './list/List'
import KanbanBoard from './kanban/KanbanBoard'
import Calendar from './calendar/Calendar'

const ItemsLayout = ({ layout = '' }) => {
    // Variables
    let itemsLayoutComponent

    if (layout === 'list') {
        itemsLayoutComponent = <List />
    } else if (layout === 'calendar') {
        itemsLayoutComponent = <Calendar />
    } else if (layout === 'kanban') {
        itemsLayoutComponent = <KanbanBoard />
    }

    return itemsLayoutComponent
}

export default ItemsLayout