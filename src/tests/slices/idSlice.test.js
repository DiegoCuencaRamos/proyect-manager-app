import idReducer from "../../slices/idSlice"

test('Should set up ids state with default values', () => {
    const state = idReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        proyectId: '',
        taskId: ''
    })
})

test('Should set proyectId state when proyect is selected', () => {
    const proyectId = '213asd'
    const action = {
        type: 'id/setProyectId',
        payload: proyectId
    }
    const state = idReducer(undefined, action)
    expect(state).toEqual({
        proyectId,
        taskId: ''
    })
})

test('Should set taskId state when task is selected', () => {
    const taskId = 'asc4353'
    const action = {
        type: 'id/setTaskId',
        payload: taskId
    }
    const state = idReducer(undefined, action)
    expect(state).toEqual({
        proyectId: '',
        taskId
    })
})