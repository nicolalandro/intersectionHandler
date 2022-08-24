//@ts-ckeck
/**
 * @jest-environment jsdom
 */
/**
 * 
 * @param {Function} callback 
 * @param {Object} options 
 * @returns IntersectionObserver
 */
export function createObserver (callback, options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
}) {
  try {
    return new IntersectionObserver(callback, options)
  } catch (error) {
    //giusto un mock per far girare i test, la questione IntersectionObserver e jest/jestdom andrà rivista x bene
    return {
      observe(){

      },
      unobserve(){

      }
    }
  }
  
}

/**
 * 
 * @param {Array} entries 
 */
export const intersectionCallback = (entries)=>{
  entries.forEach(async (entry) => {
    const {target , isIntersecting} = entry
    let callbackObject = callbacksRegistry.get(target)
    const {intersecting, unIntersecting} = callbackObject
    if(isIntersecting){
      if(intersecting){
        intersecting()
      }
    } else {
      if(unIntersecting){
        unIntersecting()
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
