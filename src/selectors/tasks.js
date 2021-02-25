const getVisibleTasks = (proyectId, tasks, { searchText, sortBy }) => {
    return tasks
        // Get filtered tasks by proyect
        .filter(task => task.proyectId === proyectId)
        // Get filtered tasks by searchText
        .filter(task => task.name.toLowerCase().includes(searchText.toLowerCase()))
        // Order tasks by criteria
        .sort((a, b) => {
            if(sortBy === 'name') {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            }
        }) 
}

export default getVisibleTasks