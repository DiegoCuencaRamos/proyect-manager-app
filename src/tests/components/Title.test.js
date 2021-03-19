import React from 'react'
import { shallow, render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import DashboardContext from '../../contexts/dashboard-context'
import Title from '../../components/Title'

const isProyect = true

test('Should render Title correctly', () => {
    const wrapper = shallow(<Title title="Some title" description="Some description" />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render Title correctly on Dashboard Proyect page', () => {
    const wrapper = render(
        <MemoryRouter>
            <DashboardContext.Provider value={{ isProyect }}>
                <Title
                    title="Some title" 
                    description="Some description"
                    isDashboard={true}
                />
                </DashboardContext.Provider>
        </MemoryRouter>
        )
    expect(wrapper).toMatchSnapshot()
})

test('Should render Title correctly on Dashboard Task page', () => {
    const wrapper = render(
        <MemoryRouter>
            <Title
                title="Some title" 
                description="Some description"
                isDashboard={true}
            />
        </MemoryRouter>
        )
    expect(wrapper).toMatchSnapshot()
})