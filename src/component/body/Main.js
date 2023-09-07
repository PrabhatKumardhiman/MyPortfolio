import React, { useEffect, useRef } from 'react'
import developer from './developer.png'
import Typed from 'typed.js';

const Main = () => {

    const text = useRef(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
          strings: ['Web Developer', '&amp; React.js Developer'],
          typeSpeed: 50,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    

    return (
        <>
            <div className="container my-3">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="mainRight col-12 col-md-6 d-flex align-items-center justify-content-center " >
                        <img src={developer} alt="" className='developerImg' />
                    </div>
                    <div className=" mainLeft col-12 col-md-6 fs-2 order-md-first">
                        <p className='myIntro'>Hi, My Name is <span className='purple'>Prabhat</span> </p>
                        <p className='myIntro'> and I'm a Passionate</p>
                        <p className='myIntro'> <span ref={text} /></p>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main