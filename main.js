import  IntersectionHandler  from "./src/IntersectionHandler"

IntersectionHandler.init({
  root: null,
  rootMargin: '50px',
  threshold: 0.01
})
const testCallbacks1 = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('intersecting1')
    target.classList.add('in-view')
  }
  
}
const testCallbacks2 =(entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('intersecting2')
    target.classList.add('in-view')
  } else {
    console.log('unIntersecting2')
    target.classList.remove('in-view')
  }
  
}  

const testCallbacks3  = (entry)=> {
  const {isIntersecting, target} = entry
  if(!isIntersecting){
    console.log('unIntersecting3')
    target.classList.remove('in-view')
  }
  
}


  
const callbacks = [testCallbacks1,testCallbacks2,testCallbacks3]
  
Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
  const elementCallbacks = callbacks[index]
  if(elementCallbacks){
    IntersectionHandler.observe(el, elementCallbacks)
  }
})