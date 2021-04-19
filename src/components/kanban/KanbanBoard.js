import React from 'react'
import KanbanBoardHeader from './KanbanBoardHeader';
import KanbanBoardBody from './KanbanBoardBody';

const KanbanBoard = () => {
    // 1. Variables
    const statuses =  ['todo', 'doing', 'done']
     
    // 2. Render
    return (
        <section className="kanban">
            <div className="container">
                {statuses.map((status, index) => (
                    <div key={index} className={`kanban__board--${status}`}>
                        <KanbanBoardHeader status={status} />
                        <KanbanBoardBody status={status} />
                    </div> 
                ))}
            </div>
        </section>   
    )
}

export default KanbanBoard