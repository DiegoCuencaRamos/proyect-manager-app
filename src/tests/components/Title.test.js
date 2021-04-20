import React from 'react'
import { render } from 'enzyme'
import { MemoryRouter } from 'react-router'
import ProyectContextProvider from '../../contexts/ProjectContext'
import Title from '../../components/Title'

test('Should render Title correctly with no context', () => {
    const wrapper = render(
        <MemoryRouter>
            <Title 
                title="Some title" 
                description="Some description" 
            />
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

test('Should render Title correctly on Dashboard Proyect page', () => {
    const wrapper = render(
        <MemoryRouter>
            <ProyectContextProvider>
                <Title
                    title="Some title" 
                    description="Some description"
                    isDashboard={true}
                />
            </ProyectContextProvider>
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