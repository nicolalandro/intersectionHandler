import  IntersectionHandler  from "./src/intersection/IntersectionHandler"
import {welcomeTo} from './src/callbacks/welcomeTo'
import {aTesting} from './src/callbacks/aTesting'
import {microExample} from './src/callbacks/microExample'


(function () {
  IntersectionHandler.init({
    root: null, // tutto il dom
    rootMargin: '50px',
    threshold: 0.1
  })

  const callbacks = [
    welcomeTo,
    aTesting,
    microExample
  ]
    
  Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
    const elementCallback = callbacks[index]
    if(elementCallback){
      IntersectionHandler.observe(el, elementCallback)
    }
  })
})();