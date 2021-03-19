import React from 'react'
import { mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import EditProyectPage from '../../components/EditProyectPage'

const getWrapper = () => mount(
    <MemoryRouter>
        <Provider store={store}>
            <EditProyectPage />
        </Provider>
    </MemoryRouter>
)

test('Should render edit page correctly', () => {
    const wrapper = render(
        <MemoryRouter>
            <Provider store={store}>
                <EditProyectPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear la parte del dispatch