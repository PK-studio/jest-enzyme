import React from 'react'
import { Snapshot } from './snapshot'

describe('Snapshot', () => {
    it('Renders component with switch off feature', () => {
        const component = mount(<Snapshot />)
        expect(component).toMatchSnapshot()
    })

    it('Renders info when feature is on', () => {
        const component = shallow(<Snapshot isFeatureToggled/>)
        const searchingText = 'Feature is switch on'
        expect(component.text().includes(searchingText)).toBe(true)
    })

    it('Return link on click', () => {
        const mockOnClick = jest.fn()
        const mockLink = 'http://test/link'
        const component = shallow(<Snapshot link={mockLink} onClick={mockOnClick} />)
        const button = component.find('[data-test-id="snapshot-button"]')
        button.simulate('click')
        expect(mockOnClick).toBeCalledTimes(1)
        expect(mockOnClick).toBeCalledWith(mockLink)
    })
})