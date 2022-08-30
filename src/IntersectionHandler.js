//@ts-ckeck
/**
 * @jest-environment jsdom
 */
import createObserver from "./createObserver"
import intersectionCallback from "./intersectionCallback"
import callbacksRegistry from "./callbacksRegistry"  



const observer = createObserver(intersectionCallback)

const IntersectionHandler = {
  /**
   * 
   * @param {HTMLElement} element 
   * @param {Object} callbacks 
   */
  observe(element, callback){
    callbacksRegistry.set(element, callback)
    observer.observe(element)
  },
  /**
   * 
   * @param {HTMLElement} element 
   */
  unobserve(element){
    callbacksRegistry.delete(element)
    observer.unobserve(element)
  },
  /**
   * 
   * @returns IntersectionObserver
   */
  getObserver(){
    return observer
  },
  /**
   * 
   * @returns Map
   */
  getRegistry(){
    return callbacksRegistry
  },
  clear(){
    const keys = Array.from(callbacksRegistry.keys())
    keys.forEach(key => this.unobserve(key))
    callbacksRegistry.clear()

  }
}
//prevent object to be modified externally
Object.freeze(IntersectionHandler)

export default IntersectionHandler
