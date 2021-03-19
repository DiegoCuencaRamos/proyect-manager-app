import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store'
import LoginEmailPage from '../../components/LoginEmailPage'

const getWrapper = () => mount(
    <Provider store={store}>
        <LoginEmailPage />
    </Provider>
)
let wrapper

beforeEach(() => {
    wrapper = getWrapper()
})

test('Should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should set email on email change', () => {
    const value = 'any email'
    wrapper.find('.form__item--emial').simulate('change', {
        target: { value }
    })
    expect(wrapper.find('.form__item--emial').prop('value')).toBe(value)
})

test('Should set password on password change', () => {
    const value = 'any password'
    wrapper.find('.form__item--password').simulate('change', {
        target: { value }
    })
    expect(wrapper.find('.form__item--password').prop('value')).toBe(value)
})

// Falta testear la parte de los disatchs.

