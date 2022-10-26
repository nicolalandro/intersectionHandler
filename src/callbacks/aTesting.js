import gsap, { Power2} from 'gsap'
import {emptyNode} from '../emptyNode'
export  const aTesting =(entry)=> {
    const {isIntersecting, target} = entry
    if(isIntersecting){
      console.log('intersecting2')
      const a = document.createElement('span')
      const span = document.createElement('span')
      gsap.set(a, {opacity:0, x:40})
      gsap.set(span, {opacity:0,x:50})
      a.appendChild(document.createTextNode('a'))
      span.appendChild(document.createTextNode('TESTING'))

      target.appendChild(a)
      target.appendChild(span)
      target.classList.add('in-view')

      const tml = new gsap.timeline();
      tml.add(gsap.to(a, {x: 0, opacity: 1, duration: 1,ease : Power2.easeOut, delay:.5}))
      tml.add(gsap.to(span, {x: 0, opacity: 1, duration: .8,ease : Power2.easeOut}), '-=.8')
      
    } else {
      target.classList.remove('in-view')
      emptyNode(target)
    }
    
  } 