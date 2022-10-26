import gsap, { Power2} from 'gsap'
import IntersectionHandler from '../IntersectionHandler'
export const welcomeTo = (entry)=> {
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