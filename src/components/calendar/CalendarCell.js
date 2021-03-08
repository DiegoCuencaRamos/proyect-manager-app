import React from 'react'

const CalenderCell = ({ day, monthStart, cellsHeight, cloneDay, formattedDate }) => {
    // Events
    const onDateClick = day => {
        setSelectedDate(day)
    }

    // Render
    return (
        <div
            className={`col cell ${
                !day.isSame(monthStart, 'month')
                    ? 'disabled'
                    : day.isSame(selectedDate, 'day') ? 'selected' : ''
            }`}
            style={{height: cellsHeight}}
            key={day}
            onClick={() => onDateClick(cloneDay)}
        >
            <span className="number">{formattedDate}</span>
            {<span className="bg">{formattedDate}</span>}
        </div>
)}

export default CalenderCell