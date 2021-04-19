import React, { useState } from 'react'
import moment from 'moment'
import CalendarHeader from './CalendarHeader'
import CalenderWeekDays from './CalendarWeekDays'
import CalendarBody from './CalendarBody'

const Calendar = () => {
    // 1. State
    const [ currentMonth, setCurrentMonth ] = useState(moment())

    // 2. Render
    return (
        <section>
            <div className="container">
                <div className="calendar">
                    <CalendarHeader 
                        currentMonth={currentMonth}
                        setCurrentMonth={setCurrentMonth}
                    /> 
                    <CalenderWeekDays 
                        currentMonth={currentMonth}
                    />
                    <CalendarBody 
                        currentMonth={currentMonth} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Calendar