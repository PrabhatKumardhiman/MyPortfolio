import React from 'react'
import developer from './developer.png'

const Main = () => {
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
                        <p className='myIntro'> Web Developer</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main