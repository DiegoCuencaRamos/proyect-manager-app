import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'


const Calendar = () => {
    const [ currentMonth, setCurrentMonth ] = useState(new Date())
    const [ selectedDate , setSelectedDate ] = useState(new Date())
    const proyects = useSelector(state => state.proyects)

    const renderHeader = () => {
        const dateFormat = 'MMMM YYYY'
        
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

    const renderWeekDays = () => {
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

        return <div className="days row">{days}</div>
    }

    const renderCells = () => {
        const monthStart = moment(currentMonth).startOf('month')
        const monthEnd = moment(currentMonth).endOf('month')
        const startDate = moment(monthStart).startOf('week')
        const endDate = moment(monthEnd).endOf('week')

        const dateFormat = 'D'
        const rows = []
        let days = []
        let day = startDate
        let formattedDate = ''

        while (day <= endDate) {
            const weekStart = moment(day)
            const weekEnd = moment(weekStart).endOf('week')
            const weekItems = proyects.filter(proyect => 
                moment(proyect.startDate).isBetween(weekStart, weekEnd)
                || moment(proyect.endDate).isBetween(weekStart, weekEnd)
            )

            let items = []
            let spaceCountWeekData = []

            weekItems.forEach(item => {
                spaceCountWeekData.push({
                    emptySpaces: 0,
                    contentSpaces: 0
                }) 
            })

            const cellsHeight = weekItems.length <= 1 ? 80 : (weekItems.length + 1) * 32
                        
            for (let i = 0; i < 7; i++) {
                // Days-row
                formattedDate = day.format(dateFormat)
                const cloneDay = moment(day)
                days.push(
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
                )

                // Items-row
                weekItems.forEach((item, index) => {
                    if(item) {

                        console.log(day.format(), moment(item.startDate).format(), day.valueOf() < moment(item.startDate).valueOf())
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

            console.log('end week')

            weekItems.forEach((item, index) => {
                if(item) {
                    items.push(
                        <div className="row item-row" key={uuidv4()}>
                            <div className="item-row__empty-space" style={{flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].emptySpaces})`}}></div>
                            <div className="item-row__contect-space" style={{flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].contentSpaces})`}}>{item.name}</div>
                        </div>
                    )
                }
            })

            rows.push(
                <div className="row" key={uuidv4()}>
                    <div className="row days-row" key={uuidv4()}>
                        {days}
                    </div>
                    <div className="row item-list-row">
                        <div className="row item-row--empty"></div>
                        {items}
                    </div>
                </div>
            )
            days = []
        }

        return <div className="body">{rows}</div>
    }

    const renderItemBlocks = () => {

    }

    const renderMonthDays = () => {
        
    }

    const onDateClick = day => {
        setSelectedDate(day)
        console.log(day.format())
    }

    const prevMonth = () => {
        setCurrentMonth(moment(currentMonth).subtract(1, 'months'))
    }

    const nextMoth = () => {
        setCurrentMonth(moment(currentMonth).add(1, 'months'))
    }

    return (
        <section>
            <div className="container">
                <div className="calendar">
                    {renderHeader()}
                    {renderWeekDays()}
                    {renderCells()}
                </div>
            </div>
        </section>
    )
}

export default Calendar

/* <div className="body">
                        <div className="row">
                            <div className="days-row">days</div> // display flex
                            <div className="items-row"> // Position relative:absolute
                                <div className="">show days</div>
                                forEach(item => {
                                    <div className="item-row">
                                        <div>empy space</div>
                                        <div>item</div>
                                    </div>
                                })
                            </div>
                        </div>
                    </div> */