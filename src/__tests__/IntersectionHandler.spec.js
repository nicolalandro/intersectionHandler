/**
 * @jest-environment jsdom
 */


import './../__mocks__/IntersectionObserver.mock'

import  IntersectionHandler from "../IntersectionHandler";

const testCallbacks1 = jest.fn()
  

beforeEach(() => {
    document.body.innerHTML = ''
    IntersectionHandler.init({})
})
afterEach(() => {
    IntersectionHandler.clear()
    jest.clearAllMocks()
})

describe('checking  methods of handler : ', ()=>{
    
    test('getObserver', ()=>{
        const observer = IntersectionHandler.getObserver()
        expect(observer).not.toBe(undefined)
    })
    test('getRegistry', ()=>{
        const registry = IntersectionHandler.getRegistry()
        expect(registry).not.toBe(undefined)
        expect(registry instanceof Map).toBe(true)
    })
    test('observe/unobserve', ()=>{
        const registry = IntersectionHandler.getRegistry()
        const element1 = document.createElement('div')
        IntersectionHandler.observe(element1, testCallbacks1)
        expect(registry.get(element1)).toBe(testCallbacks1)
        IntersectionHandler.unobserve(element1)
        expect(registry.get(element1)).toBe(undefined)
    })
    test('clear', ()=>{
        const registry = IntersectionHandler.getRegistry()
        IntersectionHandler.clear()
        expect(registry.size).toBe(0)
    })
    
})

