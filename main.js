import { IntersectionHandler } from "./src/IntersectionHandler"

const testCallbacks1 = {
  intersecting: ()=> console.log('intersecting1')
}
  
const testCallbacks2 = {
  intersecting: ()=> console.log('intersecting2'),
  unIntersecting: ()=> console.log('unIntersecting2'),
}

const testCallbacks3 = {
  unIntersecting: ()=> console.log('unIntersecting3'),
}
  
const callbacks = [testCallbacks1,testCallbacks2,testCallbacks3]
  
Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
  const elementCallbacks = callbacks[index]
  if(elementCallbacks){
    IntersectionHandler.observe(el, elementCallbacks)
  }
})