import React, { useState } from 'react'
import moment from 'moment'
import CalendarHeader from './CalendarHeader'
import CalenderWeekDays from './CalendarWeekDays'
import CalendarBody from './CalendarBody'

const Calendar = () => {
    const [ currentMonth, setCurrentMonth ] = useState(new Date())

    return (
        <section>
            <div className="container">
                <div className="calendar">
                    <CalendarHeader 
                        moment={moment}
                        currentMonth={currentMonth}
                        setCurrentMonth={setCurrentMonth}
                    /> 
                    <CalenderWeekDays 
                        moment={moment}
                        currentMonth={currentMonth}
                    />
                    <CalendarBody 
                        moment={moment}
                        currentMonth={currentMonth} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Calendar