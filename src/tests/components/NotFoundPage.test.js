import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import NotFoundPage from '../../components/NotFoundPage'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <NotFoundPage />
            </Provider>
        </MemoryRouter>
    )
})

test('Should render NotFoundPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should navigate to dashboard page on "Go back to home page clicked"', () => {
    wrapper.find('#goHomeContainer Link').simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe('/dashboard')
})