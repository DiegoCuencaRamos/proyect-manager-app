import React from 'react'
import { shallow } from 'enzyme'
import LayoutSelectors from '../../components/LayoutSelectors'

let handleLayoutChange, wrapper

beforeEach(() => {
    handleLayoutChange = jest.fn()
    wrapper = shallow(<LayoutSelectors handleLayoutChange={handleLayoutChange} />)
})

test('Should render LayoutSelectors correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should call handleLayoutChange on layout selector clicked', () => {
    const dataLayout = 'list'
    const layoutSelectorItems = wrapper.find('.layout-selector__wrapper').children()

    for(let i = 0; i < layoutSelectorItems.length; i++) {
        layoutSelectorItems.at(i).simulate('click', {
            target: { 
                dataset: { 
                    layout: dataLayout
                } 
            }
        })
        expect(handleLayoutChange).toHaveBeenCalledWith(dataLayout)
    }
})

// For the moment I wont test style event changes