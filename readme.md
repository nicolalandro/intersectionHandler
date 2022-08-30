# Intersection handler

simple centralized intersection observer and callback handler


usage:

`
const el = document.querySelector('.any-selector-you-may-have')
const exampleCallback = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('intersecting1')
    target.classList.add('in-view')
  }
  
}

IntersectionHandler.observe(el, exampleCallback)

`

