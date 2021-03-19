import React from 'react'
import KanbanBoardHeader from './KanbanBoardHeader';
import KanbanBoardBody from './KanbanBoardBody';

const KanbanBoard = () => {
    // Variables
    const statuses =  ['todo', 'doing', 'done']
     
    // Render
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