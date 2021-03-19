import moment from 'moment'

export const tasks = [{
    id: 't1',
    proyectId: 'p1',
    name: 'Task 1',
    status:"todo",
    startDate: moment("2021-03-15").valueOf(),
    endDate: moment("2021-03-19").valueOf(),
    color: 'green',
    description: 'This is my task fixure 1',
}, {
    id: 't2',
    proyectId: 'p1',
    name: 'Task 2',
    status:"doing",
    startDate: moment("2021-03-20").valueOf(),
    endDate: moment("2021-03-24").valueOf(),
    color: 'brown',
    description: 'This is my task fixure 2',
}, {
    id: 't3',
    proyectId: 'p3',
    name: 'Task 3',
    status:"done",
    startDate: moment("2021-03-25").valueOf(),
    endDate: moment("2021-03-29").valueOf(),
    color: 'purple',
    description: 'This is my task fixure 3',
}]