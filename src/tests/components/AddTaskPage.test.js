import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import AddTaskPage from '../../components/AddTaskPage'

test('Should render Add Task Page correctly', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <AddTaskPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear events: Redux - dispatchs / history.