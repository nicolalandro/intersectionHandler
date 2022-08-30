import callbacksRegistry from "./callbacksRegistry" 

/**
 * 
 * @param {Array} entries 
 */
const intersectionCallback = (entries, observer)=>{
    entries.forEach(async (entry) => {
      const { target } = entry
      const entryCallback = callbacksRegistry.get(target)
      entryCallback(entry)
    })
}

export default intersectionCallback