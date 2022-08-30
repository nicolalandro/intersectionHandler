# Intersection handler




simple wrapper to centralize intersection observer and the handlers for every element observed.

I often had to observe multiple elements and act accordingly, and found out that using a single observer is much more performant than using an observer for each target but could lead to monster callbacks with lots of ifs and cases.

this has been my solution to solve this problem by  keeping the function tidy no matter how many elements, cases, ifs...



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

