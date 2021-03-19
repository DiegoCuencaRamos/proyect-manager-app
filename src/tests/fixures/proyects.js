import moment from 'moment'

export const proyects = [{
    id: 'p1',
    name:'Proyect 1',
    status: 'todo',
    invoice: '100',
    startDate: moment().valueOf(),
    endDate: moment().add(3, 'days').valueOf(),
    color: 'green',
    description: 'This is my proyect fixure 1',
}, {
    id: 'p2',
    name:'Proyect 2',
    status: 'doing',
    invoice: '200',
    startDate: moment().add(1, 'weeks').valueOf(),
    endDate: moment().add(1, 'weeks').add(3, 'days').valueOf(),
    color: 'red',
    description: 'This is my proyect fixure 2',
}, {
    id: 'p3',
    name:'Proyect 3',
    status: 'done',
    invoice: '300',
    startDate: moment().add(2, 'weeks').valueOf(),
    endDate: moment().add(2, 'weeks').add(3, 'days').valueOf(),
    color: 'blue',
    description: 'This is my proyect fixure 3',
}]