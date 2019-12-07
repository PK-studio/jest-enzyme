import React from 'react'
import { mount } from 'enzyme'
import { Each } from './each'

describe('Temp Test', () => {
  const component = mount(<Each />)
  const allComponentText = component.text()

  describe('test each as a array', () => {
    const textPart1 = ['1', 'Temp test']
    const textPart2 = ['2', 'text part 1']
    const textPart3 = ['3', 'some text']
    const textPart4 = ['4', 'another line']
    const textPart5 = ['5', 'test footer']
    const allPhrases = [textPart1, textPart2, textPart3, textPart4, textPart5]

    it.each(allPhrases)('renders text part %s', (testNum, text) => {
      expect(allComponentText.includes(text)).toBe(true)
    })
  })

  describe('test each as a table', () => {
  })
})