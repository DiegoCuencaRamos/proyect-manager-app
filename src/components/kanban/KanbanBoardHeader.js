import React from 'react'

const KanbanBoardHeader = ({ status }) => (
    <div className="kanban__thead">
        <h3>{status}</h3>
    </div>
)

export default KanbanBoardHeader