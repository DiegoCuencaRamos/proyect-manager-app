import React from 'react'

const CalendarWeekRow = ({ days, items }) => (
    <div className="row">
        <div className="row days-row">
            {days}
        </div>
        <div className="row item-list-row">
            <div className="row item-row--empty"></div>
            {items}
        </div>
    </div>
)

export default CalendarWeekRow