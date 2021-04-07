import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store'
import EditTaskPage from '../../components/EditTaskPage'
import { MemoryRouter } from 'react-router'

test('Should render Edit Task Page correctly', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <EditTaskPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear events: Redux - dispatchs / history.