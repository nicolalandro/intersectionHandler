/**
 * @jest-environment jsdom
 */


import './../__mocks__/IntersectionObserver.mock'

import  IntersectionHandler, { intersectionCallback } from "../IntersectionHandler";

const testCallbacks1 = {
    intersecting: jest.fn()
}
  
const testCallbacks2 = {
    intersecting: jest.fn(),
    unIntersecting: jest.fn(),
}
const testCallbacks3 = {
    unIntersecting: jest.fn(),
}

beforeEach(() => {
    document.body.innerHTML = ''
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
        expect(registry.get(element1)).not.toBe(undefined)
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

describe('the intersection callback', ()=>{
    test('callback with one entry ', () => {
        document.body.innerHTML = `
            <div class="article">dummy article</div>
        `
        const article = document.querySelector('.article')
        IntersectionHandler.observe(article, testCallbacks1)
        const entries = [
          {
            target: article,
            isIntersecting: true
          }
        ]
        intersectionCallback(entries)
        expect(testCallbacks1.intersecting).toBeCalledWith(article)
    })
})