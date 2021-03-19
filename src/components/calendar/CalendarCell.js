import React from 'react'

const CalenderCell = ({ day, monthStart, cellsHeight, cloneDay, formattedDate }) => (
    <div
        className={`col calendar__cell ${cloneDay.isSame(monthStart, 'month') ? 'calendar__cell' : 'calendar__cell--disabled'}`}
        style={{height: cellsHeight}}
        key={day}
    >
        <span className="number">{formattedDate}</span>
    </div>
)

export default CalenderCell