const getFilteredItems = (
    // 1. Data
    proyectId = null,
    items = [], 
    // 2. Pagination filters
    currentPage = null, 
    pageLimit = null, 
    // 3. List filters
    textFilter = '',
    sortBy = '',
) => {

    // 1. Get proyects / tasks items
    const itemsData = proyectId ? items.filter(item => item.proyectId === proyectId) : items

    // 2. Get text filtered items
    const getFilterItems = (itemsData, textFilter) => {
        return itemsData.filter(item => item.name.toLowerCase().includes(textFilter.toLowerCase()))
    }
    const filteredItems = getFilterItems(itemsData, textFilter)

    // 3. Get page items
    const getPageItems = (filteredItems, currentPage, pageLimit) => {
        const startItem = (currentPage - 1) * pageLimit
        const endItem = currentPage * pageLimit
        return filteredItems.slice(startItem, endItem)
    }
    const pageItems = getPageItems(filteredItems, currentPage, pageLimit)

    // 4. Get ordered items
    const getOrderedItems = (pageItems, srotBy) => pageItems.sort((a, b) => {
        if(sortBy === 'name') {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        } else if (srotBy === 'invoice') {
            return a.invoice > b.invoice ? 1 : -1
        }
    })
    const orderedItems = getOrderedItems(pageItems, sortBy)

    // 5. Return final data
    return orderedItems
}

export default getFilteredItems