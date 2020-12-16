import { forwardRef } from 'react'
import {useSpring, a} from 'react-spring'
import './Background.css'

const Background = forwardRef(({ children, animate, color }, ref) => {
  const colorFinal = color ? color : '#000000'
  const animation = useSpring({
    ref: ref,
    from: { backgroundColor: '#ffffff'   },
    backgroundImage: animate ? `radial-gradient(${colorFinal} 100%, #ffffff 1%)` : `radial-gradient(#ffffff 1%, #ffffff 1%)`,
  });

  return (
    <a.div className={"background"} style={animation}>
      {children}
    </a.div>
  );
});

export default Background;