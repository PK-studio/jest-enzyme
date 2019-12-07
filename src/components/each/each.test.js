import React from 'react'
import { mount } from 'enzyme'
import { Each } from './each'

describe('Test each method', () => {
  const component = mount(<Each />)
  const allComponentText = component.text()

  describe('with an array', () => {
    const textPart1 = ['1', 'What is Lorem Ipsum?']
    const textPart2 = ['2', 'Lorem Ipsum is simply dummy text']
    const textPart3 = ['3', 'of the printing']
    const textPart4 = ['4', 'and typesetting industry']

    it.each([
      textPart1, 
      textPart2, 
      textPart3, 
      textPart4
    ])('match text part %s', (testNum, text) => {
      expect(allComponentText.includes(text)).toBe(true)
    })
  })

  describe('with a table', () => {
    it.each`
    testNum | text
    ${1}    | ${'What is Lorem Ipsum?'}
    ${2}    | ${'Lorem Ipsum is simply dummy text'}
    ${3}    | ${'of the printing'}
    ${4}    | ${'and typesetting industry'}
    `('match text part $testNum', ({text}) => {
      expect(allComponentText.includes(text)).toBe(true)
    })
  })
})