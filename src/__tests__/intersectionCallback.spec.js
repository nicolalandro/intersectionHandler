/**
 * @jest-environment jsdom
 */


 import './../__mocks__/IntersectionObserver.mock'

 import  IntersectionHandler from "../IntersectionHandler";
 import  intersectionCallback from "../intersectionCallback";
 
 const testCallbacks1 = jest.fn()
   
 const testCallbacks2 = jest.fn()
 const testCallbacks3 = jest.fn()
 
 beforeEach(() => {
     document.body.innerHTML = ''
 })
 afterEach(() => {
     IntersectionHandler.clear()
     jest.clearAllMocks()
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
         expect(testCallbacks1).toBeCalled()
     })
     test('callback with three entry ', () => {
         document.body.innerHTML = `
             <div class="article">dummy article</div>
             <div class="article">dummy article</div>
             <div class="article">dummy article</div>
         `
         const callbacks = [
             testCallbacks1,
             testCallbacks2,
             testCallbacks3,
         ]
 
         const articles = Array.from(document.querySelectorAll('.article'))
         articles.forEach((article, index) =>{
             IntersectionHandler.observe(article, callbacks[index])
         })
        
         const entries = [
           {
             target: articles[0],
             isIntersecting: true
           },
           {
             target: articles[1],
             isIntersecting: true
           },
           {
             target: articles[2],
             isIntersecting: false
           }
         ]
         intersectionCallback(entries)
         expect(testCallbacks1).toBeCalled()
         expect(testCallbacks2).toBeCalled()
         expect(testCallbacks3).toBeCalled()
     })
 })