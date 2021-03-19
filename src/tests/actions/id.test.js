import { setProyectId, setTaskId } from "../../actions/id"

test('Should set up setProyectId action object', () => {
    const id = '123qwe'
    const action = setProyectId(id)
    expect(action).toEqual({
        type: 'id/setProyectId',
        payload: id
    })
})

test('Should set up setTaskId action object', () => {
    const id = '213dfs'
    const action = setTaskId(id)
    expect(action).toEqual({
        type: 'id/setTaskId',
        payload: id
    })
})