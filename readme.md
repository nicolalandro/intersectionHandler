# Intersection handler

simple wrapper to centralize intersection observer and the handlers for every element observed


usage:

```
const el = document.querySelector('.any-selector-you-may-have')
const exampleCallback = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('intersecting1')
    target.classList.add('in-view')
  }
  
}

IntersectionHandler.observe(el, exampleCallback)

```

