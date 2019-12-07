import React from 'react'
import { Snapshot } from './snapshot'

describe('Snapshot', () => {
    it('Renders component with switch off feature', () => {
        const component = mount(<Snapshot isFeatureToggled={false}/>)
        expect(component).toMatchSnapshot()
    })

    it('Renders info when feature is on', () => {
        const component = mount(<Snapshot isFeatureToggled/>)
        const searchingText = 'Feature is switch on'
        expect(component.text().includes(searchingText)).toBe(true)
    })
})