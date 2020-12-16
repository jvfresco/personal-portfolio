import './OctogonBorder.css'
import {useSpring, a} from 'react-spring'
import { forwardRef } from 'react'

const OctogonBorder = forwardRef(({animate, color}, ref) => {

  const transition = useSpring({ 
    ref: ref, 
    from: { strokeDashoffset: 1000 }, 
    strokeDashoffset: animate ? 0 : 1000,
    config: { duration: 2000 },
  })
  
  return (
    <a.svg
      style={transition}
      className='octogon__border'
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
      x="0px"
      y="0px"
      width="440px"
      height="440px"
      viewBox="-2.313 -2.125 440 440"
      enableBackground="new -2.313 -2.125 440 440"
      xmlSpace="preserve"
    >
      <defs></defs>
      <polyline
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="10"
        strokeMiterlimit="10"
        points="306.354,1.5 128.14,1.5 1.5,128.14   1.5,307.236 128.14,433.875 128.781,433.875 "
      />
      <polyline
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="10"
        strokeMiterlimit="10"
        points="128.188,433.875 307.236,433.875   433.875,307.236 433.875,128.14 307.236,1.5 305.854,1.5 "
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="10"
        strokeMiterlimit="10"
        points="306.354,1.5 128.14,1.5 1.5,128.14   1.5,307.236 128.14,433.875 128.781,433.875 "
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="10"
        strokeMiterlimit="10"
        points="128.188,433.875 307.236,433.875   433.875,307.236 433.875,128.14 307.236,1.5 305.854,1.5 "
      />
     
    </a.svg>
  );
})

export default OctogonBorder