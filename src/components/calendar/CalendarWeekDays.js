import React from 'react'
import moment from 'moment'


const CalendarWeekDays = ({ currentMonth }) => {
    const dateFormat = 'dddd'
    const days = []
    let startDate = moment(currentMonth).startOf('week')

    for(let i = 0; i < 7; i++) {
        days.push(
            <div className="col col-center" key={i}>
                {startDate.add((i === 0 ? i : 1), 'days').format(dateFormat)}
            </div>
        )
    }

    return <div className="calendar__week row">{days}</div>
}

export default CalendarWeekDays