/**
 * @jest-environment jsdom
 */


import './../__mocks__/IntersectionObserver.mock'

import  IntersectionHandler from "../intersection/IntersectionHandler";

const testCallbacks1 = jest.fn()
  

beforeEach(() => {
    // arrange
    document.body.innerHTML = ''
    IntersectionHandler.init({})
})
afterEach(() => {
    // arrange
    IntersectionHandler.clear()
    jest.clearAllMocks()
})

describe('checking  methods of handler : ', ()=>{
    test('init', ()=>{
        // act
        const handler = IntersectionHandler.init({})
        // assert
        expect(handler).toBe(IntersectionHandler)
    })
    test('getObserver', ()=>{
        // act
        const observer = IntersectionHandler.getObserver()
        // assert
        expect(observer).not.toBe(undefined)
    })
    test('getRegistry', ()=>{
        // act
        const registry = IntersectionHandler.getRegistry()
        // assert
        expect(registry).not.toBe(undefined)
        expect(registry instanceof Map).toBe(true)
    })
    test('observe', ()=>{
        // arrange
        const registry = IntersectionHandler.getRegistry()
        const element1 = document.createElement('div')
        // act
        IntersectionHandler.observe(element1, testCallbacks1)
        // assert
        expect(registry.get(element1)).toBe(testCallbacks1)
        expect(registry.size).toBe(1)
    })
    test('unobserve', ()=>{
        // arrange
        const registry = IntersectionHandler.getRegistry()
        const element1 = document.createElement('div')
        // act
        IntersectionHandler.observe(element1, testCallbacks1)
        IntersectionHandler.unobserve(element1)
        expect(registry.get(element1)).toBe(undefined)
        expect(registry.size).toBe(0)
    })
    test('clear', ()=>{
        const registry = IntersectionHandler.getRegistry()
        IntersectionHandler.clear()
        expect(registry.size).toBe(0)
    })
    
})

