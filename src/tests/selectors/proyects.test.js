import getVisibleProyects from '../../selectors/proyects'
import { proyects } from '../fixures/proyects'

test('Should filter proyects by searchText', () => {
    const filters = {
        searchText: '1',
        sortBy: '',
        visualizeMode: ''
    }
    const result = getVisibleProyects(proyects, filters)
    expect(result).toEqual([proyects[0]])
})

test('Should sort proyects by name', () => {
    const filters = {
        searchText: '',
        sortBy: 'name',
        visualizeMode: ''
    }
    const result = getVisibleProyects(proyects, filters)
    expect(result).toEqual(proyects)
})