import React from 'react'

const CalendarWeekItemRow = ({ spaceCountWeekData, index, item }) => (
    <div className="row item-row">
        <div className="item-row__empty-space" style={{flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].emptySpaces})`}}></div>
        <div className="item-row__contect-space" style={{flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].contentSpaces})`}}>{item.name}</div>
    </div>
)

export default CalendarWeekItemRow