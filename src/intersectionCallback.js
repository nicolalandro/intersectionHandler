import callbacksRegistry from "./callbacksRegistry" 

/**
 * 
 * @param {Array} entries 
 */
const intersectionCallback = (entries, observer)=>{
    entries.forEach(async (entry) => {
      const { target } = entry
      const entryCallback = callbacksRegistry.get(target)
      // the observer is passed to the callback, so, if needed, 
      // we can unobserve the element (i.e. we want to run the spcific callback only once)
      entryCallback(entry, observer)
    })
}

export default intersectionCallback