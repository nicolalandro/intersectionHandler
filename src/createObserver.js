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
function createObserver (callback, options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
  }) {
    return new IntersectionObserver(callback, options)
  }

  export default createObserver