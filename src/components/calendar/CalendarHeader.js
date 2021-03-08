import React from 'react'

const CalendarHeader = ({ moment, currentMonth, setCurrentMonth }) => {
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
        <div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={prevMonth}>
                    {'<'}
                </div>
            </div>
            <div className="col col-center">
                <span>
                    {moment(currentMonth).format(dateFormat)}
                </span>
            </div>
            <div className="col col-end" onClick={nextMoth}>
                <div className="icon">
                    {'>'}
                </div>
            </div>
        </div>
    )
}

export default CalendarHeader