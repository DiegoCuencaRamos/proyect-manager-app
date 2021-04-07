import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import ReadTaskPage from '../../components/ReadTaskPage'
import { addTask } from '../../actions/task'
import { tasks } from '../fixures/tasks'

store.dispatch(addTask(tasks[0]))

test('Should render ReadTaskPage correctly with task data', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ 
            key: 'static', 
            pathname: '/task/t1'
        }]}>
            <Route path="/task/:taskId">
                <Provider store={store}>
                    <ReadTaskPage />
                </Provider>
            </Route>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})