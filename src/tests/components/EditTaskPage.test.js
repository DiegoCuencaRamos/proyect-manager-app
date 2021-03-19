import React from 'react'
import { mount, render } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store'
import EditTaskPage from '../../components/EditTaskPage'
import { MemoryRouter } from 'react-router'

const getWrapper = () => mount(
    <MemoryRouter>
        <Provider store={store}>
            <EditTaskPage />
        </Provider>
    </MemoryRouter>
)

test('Should render edit page correctly', () => {
    const wrapper = render(
        <MemoryRouter>
            <Provider store={store}>
                <EditTaskPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear la parte del dispatch