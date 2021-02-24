const getVisibleProyects = (proyects, { searchText, sortBy }) => {
    return proyects.filter(proyect => proyect.name.toLowerCase().includes(searchText.toLowerCase()))
        .sort((a, b) => {
            if(sortBy === 'name') {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            }
        })
    
}

export default getVisibleProyects