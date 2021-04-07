import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import DashboardContext from '../../../contexts/dashboard-context'
import List from '../../../components/list/List'
import { paginationProyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

const renderWithWrapper = () => mount(
    <MemoryRouter initialEntries={[{ key: 'static' }]}>
        <DashboardContext.Provider value={{ isProyect: true }}>
            <Provider store={store}>
                <List />
            </Provider>
        </DashboardContext.Provider>
    </MemoryRouter>
)

// Rendering
test('Should render Pagination correctly with items', () => {
    // Set proyects to the store
    paginationProyects.forEach(proyect => {
        store.dispatch(addProyect(proyect))
    })

    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
}) 

// Events
describe('Should handle Pagination events', () => {

    const value = 2
    let wrapper

    beforeEach(() => {
        wrapper = renderWithWrapper()
    })

    // PaginationSelect
    describe('Should handle Pagination Select events:', () => {

        test('Should set pagination limit on page limit change', () => {
            wrapper.find('.pagination__limit select').simulate('change', {
                target: { value }
            })
            expect(wrapper.find('.pagination__limit select').prop('value')).toBe(value)
        })
        
        test('Should set current page items on page limit change', () => {        
            wrapper.find('.pagination__limit select').simulate('change', {
                target: { value }
            })
            expect(wrapper.find('.list__body').children().length).toEqual(value)
        })
        
        test('Should set pages on page limit change', () => {        
            wrapper.find('.pagination__limit select').simulate('change', {
                target: { value }
            })
            expect(wrapper.find('PaginationPages').prop('pages')).toEqual([ 1, 2, 'right', 9 ])
        })
    })

    // PaginationPages
    describe('Should handle Pagination Pages events:', () => {

        beforeEach(() => {
            wrapper.find('.pagination__limit select').simulate('change', {
                target: { value }
            })
        })

        test('Should set correct page on page clicked', () => {
            const clickedPage = 2
            wrapper.find(`PaginationPageItem[page=${clickedPage}] a`).simulate('click', { preventDefault: jest.fn() })

            expect(wrapper.find('PaginationPages').prop('currentPage')).toBe(clickedPage)
            expect(wrapper.find('.pagination__active-page').text()).toBe(clickedPage.toString())
            expect(wrapper.find('ListBody').prop('currentItems')).toEqual([ paginationProyects[2], paginationProyects[3] ])
        })

        test('Should set correct page on right page clicked', () => {
            const currentPage = 1
            wrapper.find('[page="right"] a').simulate('click', { preventDefault: jest.fn() })

            expect(wrapper.find('PaginationPages').prop('currentPage')).toBe(currentPage + 3)
            expect(wrapper.find('.pagination__active-page').text()).toBe((currentPage + 3).toString())
            expect(wrapper.find('ListBody').prop('currentItems')).toEqual([ paginationProyects[6], paginationProyects[7] ])
        })
        
        test('Should set correct page on left page clicked', () => {
            const currentPage = 1
            wrapper.find('[page="right"] a').simulate('click', { preventDefault: jest.fn() })
            wrapper.find('[page="left"] a').simulate('click', { preventDefault: jest.fn() })

            expect(wrapper.find('PaginationPages').prop('currentPage')).toBe(currentPage + 3 - 3)
            expect(wrapper.find('.pagination__active-page').text()).toBe((currentPage + 3 - 3).toString())
            expect(wrapper.find('ListBody').prop('currentItems')).toEqual([ paginationProyects[0], paginationProyects[1] ])
        })
    })
})