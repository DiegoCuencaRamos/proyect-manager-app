import getVisibleTasks from '../../selectors/tasks'
import { tasks } from '../fixures/tasks'

test('Should filter tasks by proyect', () => {
    const proyectId = 'p1'
    const filters = {
        searchText: '',
        sortBy: '',
        visualizeMode: ''
    }
    const result = getVisibleTasks(proyectId, tasks, filters)
    expect(result).toEqual([tasks[0], tasks[1]])
})

test('Should filter tasks by searchText', () => {
    const proyectId = 'p1'
    const filters = {
        searchText: '1',
        sortBy: '',
        visualizeMode: ''
    }
    const result = getVisibleTasks(proyectId, tasks, filters)
    expect(result).toEqual([tasks[0]])
})

test('Should sort tasks by name', () => {
    const proyectId = 'p1'
    const filters = {
        searchText: '',
        sortBy: 'name',
        visualizeMode: ''
    }
    const result = getVisibleTasks(proyectId, tasks, filters)
    expect(result).toEqual([tasks[0], tasks[1]])
})