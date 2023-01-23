![CI Build status](https://github.com/nicolalandro/intersectionHandler/actions/workflows/main.yml/badge.svg)

# What's this

Demo project in vanilla js to showcase the usage of unit and end to end tests. 

to run the test project : 
after `npm install` , 

run `npm run dev`

to unit test (jest) : `npm run test`  

e2e test (cypress) : in a teminal tab: `npm run dev` and in another tab:  `npm run e2e`

# About  the IntersectionHandler used in this demo

Simple wrapper to centralize intersection observer and the handlers for every element observed.

I often had to observe multiple elements and act accordingly, and found out that using a single observer is much more performant than using an observer for each target, but it could lead to monster callbacks with lots of ifs and cases.

This has been my solution to solve this problem by keeping the function tidy (see ./src/intersectionCallback.js ) no matter how many elements.



usage:

```js
import  IntersectionHandler  from './path/to/IntersectionHandler'

// options object -> same as passed to the constructor of a new IntesectionObserver 
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
}

IntersectionHandler.init(options) 


const el = document.querySelector('.any-selector-you-may-have')


// function called every time the element enters or exits the viewport

const exampleCallback = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('exampleCallback')
    target.classList.add('in-view')
  }
}

IntersectionHandler.observe(el, exampleCallback)

// function called the first time the element enters the viewport

const exampleCallbackRunOnce = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('exampleCallbackRunOnce')
    target.classList.add('in-view')
    IntersectionHandler.unobserve(target)
  }
  
}

IntersectionHandler.observe(el, exampleCallbackRunOnce)

// etc...




```

