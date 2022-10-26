import gsap, { Power2} from 'gsap'
import IntersectionHandler from '../IntersectionHandler'

export  const microExample  = (entry)=> {
    const {isIntersecting, target} = entry
    if(isIntersecting){
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
      tml.add(gsap.to(micro, {y: 0, opacity: 1, duration: 1,ease : Power2.easeOut, delay:.5}))
      tml.add(gsap.to(example, {y: 0, opacity: 1, duration: .7,ease : Power2.easeOut}), '-=.7')
      target.classList.add('in-view')
      
    }
    
  }