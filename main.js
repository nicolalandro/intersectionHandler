import  IntersectionHandler  from "./src/IntersectionHandler"

const testCallbacks1 = {
  intersecting: (target)=> {
    console.log('intersecting1')
    target.classList.add('in-view')
  }
}
  
const testCallbacks2 = {
  intersecting: (target)=> {
    console.log('intersecting2')
    target.classList.add('in-view')
  },
  unIntersecting: (target)=> {
    console.log('unIntersecting2')
    target.classList.remove('in-view')
  },
}

const testCallbacks3 = {
  unIntersecting:  (target)=> {
    console.log('unIntersecting3')
    target.classList.remove('in-view')
  },
}


  
const callbacks = [testCallbacks1,testCallbacks2,testCallbacks3]
  
Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
  const elementCallbacks = callbacks[index]
  if(elementCallbacks){
    IntersectionHandler.observe(el, elementCallbacks)
  }
})