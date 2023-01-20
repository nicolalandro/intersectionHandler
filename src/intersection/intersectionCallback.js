import callbacksRegistry from './callbacksRegistry'

/**
 * Callback called each time the observer notifies do so
 * @param {Array} entries
 */
const intersectionCallback = (entries) => {
  entries.forEach(async (entry) => {
    const { target } = entry
    const entryCallback = callbacksRegistry.get(target)
    entryCallback(entry)
  })
}

export default intersectionCallback
