import { useRef } from 'react';

import gsap from '../node-modules/gsap/index.js';// <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

const container = useRef();

useGSAP(
    () => {
        // gsap code here...
        gsap.to('.box', { rotation: 180 }); // <-- automatically reverted
    },
    { scope: container }
); // <-- scope for selector text (optional)

function GSP() {


  return (
    <>
       
       <div ref={container} className="app">
            <div className="box">Hello</div>
        </div>

    </>
  )
}

export default GSP
