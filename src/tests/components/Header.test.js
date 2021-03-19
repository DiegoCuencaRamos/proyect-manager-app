import React from 'react'
import { mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../../components/Header'

const getWrapper = () => mount(
    <MemoryRouter>
        <Provider store={store}>
            <Header />
        </Provider>
    </MemoryRouter>
)

test('Shoud render Header correctly', () => {
    const wrapper = render(
        <MemoryRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta comprobar el onLogOut event