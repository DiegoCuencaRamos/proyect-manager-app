const getVisibleProyects = (proyects, { searchText, sortBy }) => {
    return proyects
        // Get filtered proyects by searchText
        .filter(proyect => proyect.name.toLowerCase().includes(searchText.toLowerCase()))
        // Order proyects by criteria
        .sort((a, b) => {
            if(sortBy === 'name') {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            }
        })
    
}

export default getVisibleProyects