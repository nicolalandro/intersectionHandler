/**
 * @jest-environment jsdom
 */
import './../__mocks__/IntersectionObserver.mock'
import {welcomeTo} from '../callbacks/welcomeTo'
import  IntersectionHandler from "../IntersectionHandler";
beforeEach(() => {
    // arrange
    IntersectionHandler.init({})
    document.body.innerHTML = '<div id="test"></div>'
})

describe('checking  welcomeTo : ', ()=>{
    test('init', ()=>{
        const target = document.getElementById('test')
        const entry = {
            isIntersecting:true,
            target: target
        }

        welcomeTo(entry)

        expect(target.querySelector('.text-container')).not.toBe(null)
        expect(target.querySelectorAll('span')[0].textContent).toBe('Welcome')
        expect(target.querySelectorAll('span')[1].textContent).toBe('To')
    })
})