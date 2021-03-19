import React from 'react'
import moment from 'moment'


const CalendarHeader = ({ currentMonth, setCurrentMonth }) => {
    // Variables
    const dateFormat = 'MMMM YYYY'

    // Events
    const prevMonth = () => {
        setCurrentMonth(moment(currentMonth).subtract(1, 'months'))
    }

    const nextMoth = () => {
        setCurrentMonth(moment(currentMonth).add(1, 'months'))
    }
        
    // Render    
    return (
        <div className="calendar__header row flex-middle">
            <div className="col col-start">
                <div id="prevMonth" className="icon" onClick={prevMonth}>
                    {'<'}
                </div>
            </div>
            <div className="col col-center">
                <span id="displayMonth">
                    {moment(currentMonth).format(dateFormat)}
                </span>
            </div>
            <div className="col col-end">
                <div id="nextMonth" className="icon" onClick={nextMoth}>
                    {'>'}
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader