import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from '../../store'
import taskReducer from '../../slices/taskSlice'
import { addTask } from '../../actions/task'
import ReadTaskPage from '../../components/ReadTaskPage'
import { tasks } from '../fixures/tasks'


const mockStore = createStore(taskReducer)
const getWrapper = () => mount(
    <MemoryRouter initialEntries={['tasks/t1']}>
        <Provider store={store}>
            <ReadTaskPage />
        </Provider>
    </MemoryRouter>
)

test('Should render ReadTaskPage correctly with task data', () => {
    mockStore.dispatch(addTask(tasks[0]))
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
})