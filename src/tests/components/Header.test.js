import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../../components/Header'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <Header />
            </Provider>
        </MemoryRouter>
    )
})

test('Shoud render Header correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should navigate to dashboard page on logo cliked', () => {
    wrapper.find('Link').simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe('/dashboard')
})

// Falta comprobar el onLogOut event