import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import EditProyectPage from '../../components/EditProyectPage'

test('Should render Edit Proyect Page correctly', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <EditProyectPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear events: Redux - dispatchs / history.