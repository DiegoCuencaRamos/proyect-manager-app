const getFilteredProyects = (proyects, textFilter, sortBy) => {
    return proyects
        // Get filtered proyects by textFilter
        .filter(proyect => proyect.name.toLowerCase().includes(textFilter.toLowerCase()))
        // Order proyects by criteria
        .sort((a, b) => {
            if(sortBy === 'name') {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            }
        })
    
}

export default getFilteredProyects