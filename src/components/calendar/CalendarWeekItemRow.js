import React from 'react'

const CalendarWeekItemRow = ({ spaceCountWeekData, index, item }) => {
    // 1. Variables
    const emptySpaceStyle = {
        flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].emptySpaces})`
    }

    const contentSpaceColor = {
        flexBasis: `calc((100%/7) * ${spaceCountWeekData[index].contentSpaces})`,
        backgroundColor: item.color,
    }

    // 2. Render
    return (
        <div className="row item-row">
            <div 
                className="item-row__empty-space" 
                style={emptySpaceStyle}></div>
            <div 
                className="item-row__content-space" 
                style={contentSpaceColor}>{item.name}</div>
        </div>
    )
}

export default CalendarWeekItemRow