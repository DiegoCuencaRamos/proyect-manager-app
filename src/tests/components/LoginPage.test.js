import React from 'react'
import { render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import LoginPage from '../../components/LoginPage'

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

// Falta testear events: Redux - dispatchs.