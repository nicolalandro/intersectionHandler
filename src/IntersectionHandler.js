//@ts-ckeck
/**
 * @jest-environment jsdom
 */
import createObserver from "./createObserver"
  

/**
 * 
 * @param {Array} entries 
 */
export const intersectionCallback = (entries)=>{
  entries.forEach(async (entry) => {
    const {target , isIntersecting} = entry
    const {intersecting, unIntersecting} = callbacksRegistry.get(target)
    if(isIntersecting){
      if(intersecting){
        intersecting(target)
      }
    } else {
      if(unIntersecting){
        unIntersecting(target)
      }
    }
  })
}

const observer = createObserver(intersectionCallback)

const callbacksRegistry = new Map()

const IntersectionHandler = {
  /**
   * 
   * @param {HTMLElement} element 
   * @param {Object} callbacks 
   */
  observe(element, callbacks){
    callbacksRegistry.set(element, callbacks)
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
