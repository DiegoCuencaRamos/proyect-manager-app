import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import CalenderCell from './CalendarCell'
import CalendarWeekItemRow from './CalendarWeekItemRow'
import CalendarWeekRow from './CalendarWeekRow'

const CellsList = ({ moment, currentMonth }) => {
    // State
    // const [ selectedDate , setSelectedDate ] = useState(new Date())
    const proyects = useSelector(state => state.proyects)

    // Varialbes
    const monthStart = moment(currentMonth).startOf('month')
    const monthEnd = moment(currentMonth).endOf('month')
    const startDate = moment(monthStart).startOf('week')
    const endDate = moment(monthEnd).endOf('week')

    const dateFormat = 'D'
    const rows = []
    let days = []
    let day = startDate
    
    // Render
    while (day <= endDate) {
        const weekStart = moment(day)
        const weekEnd = moment(weekStart).endOf('week')
        const weekItems = proyects.filter(proyect => 
            moment(proyect.startDate).isBetween(weekStart, weekEnd)
            || moment(proyect.endDate).isBetween(weekStart, weekEnd)
        )
        const cellsHeight = weekItems.length <= 1 ? 96 : (weekItems.length + 1) * 32
        let items = []
        let spaceCountWeekData = []

        weekItems.forEach(item => {
            spaceCountWeekData.push({
                emptySpaces: 0,
                contentSpaces: 0
            }) 
        })
                    
        for (let i = 0; i < 7; i++) {
            // Days
            const formattedDate = day.format(dateFormat)
            const cloneDay = moment(day)
            days.push(
                <CalenderCell
                    key={uuidv4()} 
                    day={day}
                    monthStart={monthStart}
                    cellsHeight={cellsHeight}
                    cloneDay={cloneDay}
                    formattedDate={formattedDate}
                />
            )

            // Items
            weekItems.forEach((item, index) => {
                if(item) {

                    if(day.isBefore(item.startDate)) {
                        spaceCountWeekData[index].emptySpaces++
                    } else if (
                        day.isSameOrAfter(item.startDate) 
                        && day.isSameOrBefore(item.endDate)
                    ) {
                        spaceCountWeekData[index].contentSpaces++
                    }
                }
            })
            
            day = day.add(1, 'days')
        }
        
        // Items
        weekItems.forEach((item, index) => {
            if(item) {
                items.push(
                   <CalendarWeekItemRow
                        key={uuidv4()}
                        spaceCountWeekData={spaceCountWeekData}
                        index={index}
                        item={item}
                   /> 
                )
            }
        })

        rows.push(
            <CalendarWeekRow 
                key={uuidv4()}
                days={days}
                items={items}
            />
        )
        days = []
    }

    return <div className="calendar__body">{rows}</div>
}

export default CellsList