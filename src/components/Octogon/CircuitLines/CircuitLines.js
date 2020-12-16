import './CircuitLines.css'
import { useSpring, a} from 'react-spring'
import { forwardRef } from 'react';

const CircuitLines = forwardRef(({animate, color},ref) => {

  const transition = useSpring({ 
    ref: ref,
    from: { strokeDashoffset: 1000 }, 
    strokeDashoffset: animate ? 0 : 1000,
    config: { duration: 3000 },
    
  })
 
  return (
    <>
    <a.svg
      style={transition}
      className='circuit__lines'
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
      x="0px"
      y="0px"
      width="1366px"
      height="478px"
      viewBox="227 276.221 1366 478"
      enableBackground="new 227 276.221 1366 478"
      xmlSpace="preserve"
    >
      <defs></defs>

      <polyline
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="788.765,698.928 589.5,698.928   527,649.928 414,649.928 388,681.928 288,681.928 "
      />
      <path
       
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M736.764,646.928H608l-66.5-48H302  c0,0-0.083-4.5-5-4.5s-4.917,5.167-4.917,5.167s0,5,5,5s5.5-6.084,5.5-6.084"
      />
      <polyline
       
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="693.813,534.24 651.5,534.24 619,506.428   507,506.428 507,530.428 359,530.428 322,570.428 262,570.428 "
      />
      <path
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M693.813,468.428H533.502l-96.5-92v-35H372  l-48.25,48.25H262c0,0,0-5.083-4.917-5.083s-5,5-5,5s-0.167,4.917,4.917,4.917s5.583-5.333,5.583-5.333"
      />
      <polyline
       
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="719.002,400.428 658.002,400.428   568.002,490.428 568.002,405.428 391,405.428 371,425.428 302,425.428 "
      />
      <path
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M753.002,367.428l-28.5-28.5h-211  c0,0-0.418-5.083-5.168-5.083s-5.083,5-5.083,5s0.083,4.917,5.083,4.917s5.667-5.5,5.667-5.5"
      />
      <path
       
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1092.736,390.928h106.767l33.5,49h192v35H1522  c0,0,0.063-5.188,5-5.188s5.063,5.188,5.063,5.188s-0.188,4.875-5.063,4.875s-5.75-5.188-5.75-5.188"
      />
      <polyline
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1126.188,445.928 1201.502,445.928   1254.002,373.428 1254.002,315.928 1384.002,315.928 "
      />
      <polyline
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1059.736,357.928 1285.502,357.928   1315.502,404.928 1418.502,404.928 1452.502,371.428 1547.502,371.428 "
      />
      <path
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1126.188,476.928h58.814l21.5,30h108v-15h132l50-54  h65.415c0,0,0.084-4.583,5.084-4.583s5,4.583,5,4.583s-0.251,5.083-5.084,5.083s-5.583-5.417-5.583-5.417"
      />
      <polyline
       
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1126.188,559.428 1258.002,559.428   1342.502,651.428 1342.502,683.428 1457.502,683.428 1505.502,636.428 1557.502,636.428 "
      />
      <path
      
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1119.502,610.428h52l80-91v91H1403l36-36h78.002  c0,0,0.332-4.917,5.165-4.917s4.75,5,4.75,5s0.082,5.167-4.834,5.167s-5.666-5.667-5.666-5.667"
      />
      <polyline
        
        fill="none"
        stroke="#e7e7e7"
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1086.002,644.928 1112.002,665.428   1315.002,665.428 "
      />

<polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="788.765,698.928 589.5,698.928   527,649.928 414,649.928 388,681.928 288,681.928 "
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M736.764,646.928H608l-66.5-48H302  c0,0-0.083-4.5-5-4.5s-4.917,5.167-4.917,5.167s0,5,5,5s5.5-6.084,5.5-6.084"
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="693.813,534.24 651.5,534.24 619,506.428   507,506.428 507,530.428 359,530.428 322,570.428 262,570.428 "
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M693.813,468.428H533.502l-96.5-92v-35H372  l-48.25,48.25H262c0,0,0-5.083-4.917-5.083s-5,5-5,5s-0.167,4.917,4.917,4.917s5.583-5.333,5.583-5.333"
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="719.002,400.428 658.002,400.428   568.002,490.428 568.002,405.428 391,405.428 371,425.428 302,425.428 "
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M753.002,367.428l-28.5-28.5h-211  c0,0-0.418-5.083-5.168-5.083s-5.083,5-5.083,5s0.083,4.917,5.083,4.917s5.667-5.5,5.667-5.5"
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1092.736,390.928h106.767l33.5,49h192v35H1522  c0,0,0.063-5.188,5-5.188s5.063,5.188,5.063,5.188s-0.188,4.875-5.063,4.875s-5.75-5.188-5.75-5.188"
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1126.188,445.928 1201.502,445.928   1254.002,373.428 1254.002,315.928 1384.002,315.928 "
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1059.736,357.928 1285.502,357.928   1315.502,404.928 1418.502,404.928 1452.502,371.428 1547.502,371.428 "
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1126.188,476.928h58.814l21.5,30h108v-15h132l50-54  h65.415c0,0,0.084-4.583,5.084-4.583s5,4.583,5,4.583s-0.251,5.083-5.084,5.083s-5.583-5.417-5.583-5.417"
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1126.188,559.428 1258.002,559.428   1342.502,651.428 1342.502,683.428 1457.502,683.428 1505.502,636.428 1557.502,636.428 "
      />
      <path
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M1119.502,610.428h52l80-91v91H1403l36-36h78.002  c0,0,0.332-4.917,5.165-4.917s4.75,5,4.75,5s0.082,5.167-4.834,5.167s-5.666-5.667-5.666-5.667"
      />
      <polyline
        className='path'
        fill="none"
        stroke={color ? color : undefined}
        strokeWidth="3"
        strokeMiterlimit="10"
        points="1086.002,644.928 1112.002,665.428   1315.002,665.428 "
      />
    </a.svg>
<svg className={'circuit__background'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="1366px" height="769px" viewBox="-23.583 118 1366 769" enableBackground="new -23.583 118 1366 769" xmlSpace="preserve">
<defs>
</defs>
<polygon fill="none" stroke="#AFAFAF" strokeWidth="10.8" strokeMiterlimit="10" points="584.855,681.313 479.417,575.875   479.417,426.75 584.855,321.313 733.979,321.313 839.417,426.75 839.417,575.875 733.979,681.313 "/>
<g>
	<g>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" points="451.844,647.294 409.417,604.868     409.417,544.868   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" points="409.417,457.758 409.417,397.758     451.844,355.332   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" strokeDasharray="125.3297,83.5531" points="    510.925,296.251 555.863,251.313 762.971,251.313 837.45,325.791   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" points="866.99,355.332 909.417,397.758     909.417,457.758   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" points="909.417,544.868 909.417,604.868     866.99,647.294   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="15" strokeMiterlimit="10" strokeDasharray="125.3295,83.553" points="    807.909,706.374 762.971,751.313 555.863,751.313 481.384,676.834   "/>
	</g>
</g>
<polygon fill="none" stroke="#AFAFAF" strokeWidth="10" strokeMiterlimit="10" strokeDasharray="140,40,60,80,20,20" points="  514.442,851.313 309.417,646.29 309.417,356.336 514.442,151.313 804.392,151.313 1009.417,356.336 1009.417,646.29   804.392,851.313 "/>
<g>
	<g>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" points="437.199,703.547 359.417,625.766     359.417,515.766   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" strokeDasharray="217.6882,29.6847" points="    359.417,486.081 359.417,377.236 446.876,289.777   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" points="457.371,279.282 535.153,201.5     645.153,201.5   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" strokeDasharray="218.1677,29.7501" points="    674.903,201.5 783.681,201.5 959.417,377.236 959.417,500.891   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" points="959.417,515.766 959.417,625.766     881.635,703.547   "/>
		<polyline fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" strokeDasharray="218.1662,29.7499" points="    860.599,724.583 783.681,801.5 535.153,801.5 447.717,714.065   "/>
	</g>
</g>
<polygon fill="none" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" points="452.31,1001.5 159.417,708.609   159.417,294.395 452.31,1.5 866.524,1.5 1159.417,294.395 1159.417,708.609 866.524,1001.5 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="3" strokeMiterlimit="10" points="203.917,433 159.417,433 113.167,479.25   159.417,479.25 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="463.966,614.285 193.084,614.285   152.858,574.059 78.417,574.059 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="147.084,574.059 167.084,574.059   203.917,614.285 183.75,614.285 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="274.417,614.285 296.306,592.396   394.417,592.396 374.913,613.708 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="443.229,433.5 183.417,433.5 138.417,478   19.417,478 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="19.917,378.917 83.667,378.917   94.417,368.167 126.583,336 344.917,336 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="126.583,336 149.5,313.083   267.25,313.083 290.042,335.875 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="333.917,336 363.043,336   405.109,378.066 375.25,378.066 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="514.181,662 463.966,662 413.943,712.022   365.417,712.022 340.417,712.022 274.417,662 203.917,662 175.5,662 159.417,662 116.792,619.375 23.417,619.375 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="413.943,712.022 398.941,727.024   394.547,731.419 359.417,731.419 340.219,712.221 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="109.417,619.375 128.417,619.375   170.479,661.438 151.917,661.438 "/>
<path fill="#AFAFAF" d="M193.626,379l-27.399,28h-3.601l27.805-28H193.626z M200.431,379l-27.805,28h3.601l27.399-28H200.431z   M210.431,379l-27.805,28h3.601l27.399-28H210.431z M220.431,379l-27.805,28h3.601l27.399-28H220.431z M230.431,379l-27.805,28  h3.601l27.399-28H230.431z M240.431,379l-27.805,28h3.601l27.399-28H240.431z M253.626,379l-27.399,28h-3.601l27.805-28H253.626z   M260.431,379l-27.805,28h3.601l27.399-28H260.431z M270.431,379l-27.805,28h3.601l27.399-28H270.431z M280.431,379l-27.805,28  h3.601l27.399-28H280.431z M290.431,379l-27.805,28h3.601l27.399-28H290.431z M300.431,379l-27.805,28h3.601l27.399-28H300.431z"/>
<path fill="#AFAFAF" d="M473.626,674l-27.399,28h-3.601l27.805-28H473.626z M480.431,674l-27.805,28h3.601l27.399-28H480.431z   M490.431,674l-27.805,28h3.601l27.399-28H490.431z M500.431,674l-27.805,28h3.601l27.399-28H500.431z M510.431,674l-27.805,28  h3.601l27.399-28H510.431z M520.431,674l-27.805,28h3.601l27.399-28H520.431z"/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="842.152,624.5 868.919,645.365   1021.084,645.365 1078.418,681.334 1123.084,681.334 1159.417,656 1206.418,656 "/>
<path fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" d="M999.917,645.365h17.667l79.666,49.469  L1078.917,695L999.917,645.365z"/>
<polygon fill="#AFAFAF" points="1078.25,681.334 1127.417,681.334 1106.25,697.334 1080.084,697.334 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="875.604,584.5 1053.036,584.5   1084.727,552.81 1248.417,552.81 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="1095.917,552.81 1065.667,552.81   1032.167,584.5 1064.667,584.5 "/>
<path fill="#AFAFAF" d="M1103.626,584l-27.399,28h-3.601l27.805-28H1103.626z M1110.431,584l-27.805,28h3.601l27.399-28H1110.431z   M1120.431,584l-27.805,28h3.601l27.399-28H1120.431z M1130.431,584l-27.805,28h3.601l27.399-28H1130.431z M1140.431,584l-27.805,28  h3.601l27.399-28H1140.431z M1150.431,584l-27.805,28h3.601l27.399-28H1150.431z"/>
<path fill="#AFAFAF" d="M1048.626,414l-27.399,28h-3.601l27.805-28H1048.626z M1055.431,414l-27.805,28h3.601l27.399-28H1055.431z   M1065.431,414l-27.805,28h3.601l27.399-28H1065.431z M1075.431,414l-27.805,28h3.601l27.399-28H1075.431z M1085.431,414l-27.805,28  h3.601l27.399-28H1085.431z M1095.431,414l-27.805,28h3.601l27.399-28H1095.431z M1108.626,414l-27.399,28h-3.601l27.805-28  H1108.626z M1115.431,414l-27.805,28h3.601l27.399-28H1115.431z M1125.431,414l-27.805,28h3.601l27.399-28H1125.431z M1135.431,414  l-27.805,28h3.601l27.399-28H1135.431z M1145.431,414l-27.805,28h3.601l27.399-28H1145.431z M1155.431,414l-27.805,28h3.601  l27.399-28H1155.431z"/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="826.368,362.716 969.75,362.716   1017.042,315.424 1117.083,315.424 1162.037,360.378 1174.704,373.045 1264.416,373.045 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="1130.871,329.212 1003.254,329.212   1017.042,315.424 1117.083,315.424 "/>
<polyline fill="none" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="875.604,504.5 902.417,504.5 985.417,466   1091.262,466 1113.126,466 1163.021,515.896 1257.917,515.896 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="902.417,504.5 886.667,504.5   969.917,466 985.417,466 "/>
<polygon fill="#AFAFAF" stroke="#AFAFAF" strokeWidth="5" strokeMiterlimit="10" points="1102.751,466 1128.418,466   1177.751,515.896 1150.084,515.896 "/>
</svg>
    </>
  );
})

export default CircuitLines