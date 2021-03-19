import React from 'react'
import { mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import LoginPage from '../../components/LoginPage'

const getWrapper = () => mount(
    <MemoryRouter>
        <Provider store={store}>
            <LoginPage />
        </Provider>
    </MemoryRouter>
)

test('Should render LoginPage correctly', () => {
    const wrapper = render(
        <MemoryRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})
