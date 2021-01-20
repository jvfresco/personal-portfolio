
import React, { useState, useEffect } from 'react'
import { useTransition, a} from 'react-spring'
import './OctogonContent.css'
import useWindowFocus from './useWindowFocus'

const OctogonContent = ({showModal, onClick, projects}) => {
  const [index, set] = useState(0)  //State that controls the index of the element to transition
  const windowFocus = useWindowFocus() //Hook to know if the window is onfocus
  const [timer, setTimer] = useState(null)  //Interval that controls the animation
  const transitions = useTransition(projects[index], item => item.id, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: {mass: 1, tension: 280, friction: 120, duration: 500},
  })

  //Function that starts the interval for the transition animation
  function intervalMovementStart(){
    void setTimer(setInterval(() => set(state => (state + 1) % 6), 2000))
  }
  
  //Interval is started when mounting (modal is closed)
  //Animation only active onfocus
  useEffect(() => {
    if (showModal || !windowFocus){
      clearInterval(timer)
    } else if(!showModal && windowFocus){
      intervalMovementStart()
    }
    // eslint-disable-next-line
  },[showModal, windowFocus])

  return ( 
    //Animation will stop when hovering and start again when unhovering if the modal is closed
  <div onClick={()=> onClick({type: 'LOAD_PROJECT', index: index})} onMouseMove={() => clearInterval(timer)} onMouseLeave={() => !showModal ? intervalMovementStart() : null} style={{height:'100%'}}>
    {transitions.map(({ item, props: {opacity}, key }) => (
        <a.div
          key={key}
          className="octogon__image"
          style={{ opacity, backgroundImage: `url(${item.imageUrl})` }}
        />
    ))}
    <div className="octogon__title">
      {transitions.map(({item, props, key }) => (
        <a.div className="octogon__title--text" style={{...props}} key={key} >
          {item.title}
        </a.div> 
      ))}
       
    </div> 
  </div>
  )

}

export default OctogonContent