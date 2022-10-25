import  IntersectionHandler  from "./src/IntersectionHandler"
import gsap, { Power2} from 'gsap'




IntersectionHandler.init({
  root: null,
  rootMargin: '50px',
  threshold: 0.01
})
const testCallbacks1 = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    const container = document.createElement('div')
    container.className = 'text-container'
    const welcome = document.createElement('span')
    const to = document.createElement('span')
    welcome.appendChild(document.createTextNode('Welcome'))
    to.appendChild(document.createTextNode('To'))
    container.appendChild(welcome)
    container.appendChild(to)
    
    target.classList.add('in-view')
    IntersectionHandler.unobserve(target)
    gsap.set(welcome, {opacity:0, y:150})
    gsap.set(to, {opacity:0,y:150})
    target.appendChild(container)

    const tml = new gsap.timeline();
    tml.add(gsap.to(welcome, {y: 0, opacity: 1, duration: .6,ease : Power2.easeOut}))
    tml.add(gsap.to(to, {y: 0, opacity: 1, duration: .4,ease : Power2.easeOut}), '-=.4')
    
    
  }
  
}
const testCallbacks2 =(entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('intersecting2')
    const a = document.createElement('span')
    const span = document.createElement('span')
    gsap.set(a, {opacity:0, x:50})
    gsap.set(span, {opacity:0,x:50})
    a.appendChild(document.createTextNode('a'))
    span.appendChild(document.createTextNode('TESTING'))

    target.appendChild(a)
    target.appendChild(span)
    target.classList.add('in-view')

    const tml = new gsap.timeline();
    tml.add(gsap.to(a, {x: 0, opacity: 1, duration: .6,ease : Power2.easeOut, delay:2}))
    tml.add(gsap.to(span, {x: 0, opacity: 1, duration: .4,ease : Power2.easeOut}), '-=.4')
    
  } else {
    console.log('unIntersecting2')
    target.classList.remove('in-view')
    target.textContent = ''
  }
  
}  

const testCallbacks3  = (entry)=> {
  const {isIntersecting, target} = entry
  if(isIntersecting){
    console.log('Intersecting3')
    IntersectionHandler.unobserve(target)
    
    const container = document.createElement('div')
    container.className = 'text-container'
    const micro = document.createElement('span')
    const example = document.createElement('span')
    micro.appendChild(document.createTextNode('Micro'))
    example.appendChild(document.createTextNode('Example'))
    container.appendChild(micro)
    container.appendChild(example)
    gsap.set(micro, {opacity:0, y:150})
    gsap.set(example, {opacity:0,y:150})
    target.appendChild(container)
    const tml = new gsap.timeline();
    tml.add(gsap.to(micro, {y: 0, opacity: 1, duration: .6,ease : Power2.easeOut, delay:2}))
    tml.add(gsap.to(example, {y: 0, opacity: 1, duration: .4,ease : Power2.easeOut}), '-=.4')
    target.classList.add('in-view')
    
  }
  
}

const callbacks = [testCallbacks1,testCallbacks2,testCallbacks3]
  
Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
  const elementCallbacks = callbacks[index]
  if(elementCallbacks){
    IntersectionHandler.observe(el, elementCallbacks)
  }
})