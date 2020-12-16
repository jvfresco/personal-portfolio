import React, { forwardRef } from 'react'
import { useSpring, a } from 'react-spring'
import OctogonContent from './OctogonContent/OctogonContent'
import './Octogon.css'

const filter = (x) => `drop-shadow(0px 0px ${x}px rgba(0, 0, 0, 0.5))`

const Octogon = forwardRef(({projects, onClick, showModal, animate, colors}, ref) => {

  const animation = useSpring({
    ref: ref,
    from: { backgroundImage: 'linear-gradient(to bottom right, #dfdfdf 30%, #FFFFFF 60% )'   },
    backgroundImage: animate ? `linear-gradient(to bottom right, ${colors.secondary} 30%, ${colors.primary} 60% )` : `linear-gradient(to bottom right, #dfdfdf 30%, #FFFFFF 60% )`,
    config: {duration: 3000}
  });

  const [props, set] = useSpring(() => ({ 
    x: 0, 
  }))

  return (
    <>
    <a.div className="octogon__shadow" style={{ filter: props.x.interpolate(filter) }}>
      <a.div style={animation} className='octogon' onMouseMove ={() => set({x:15})}  onMouseLeave={() => set({ x:0 })}>
        <OctogonContent projects={projects} onClick={onClick}  showModal={showModal}/>
      </a.div>
    </a.div>
    </>
  )

})

export default Octogon