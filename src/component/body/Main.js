import React, { useEffect, useRef } from 'react'
import developer from './developer.png'
import Typed from 'typed.js';
import aboutme from './aboutme.png'

const Main = () => {

    const text = useRef(null);

    // Adding Animation of typing On Load
    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ['Web Developer', 'React.js Developer', '&amp; Web Designer'],
            typeSpeed: 70,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
            <section className="firstSection">
                <div className="container my-3">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="mainRight col-12 col-md-6 d-flex align-items-center justify-content-center " >
                            <img src={developer} alt="" className='developerImg' />
                        </div>
                        <div className=" mainLeft col-12 col-md-6 fs-2 order-md-first">
                            <div className="introSection d-flex flex-column justify-content-center">
                                <p className='myIntro'>Hi, My Name is <span className='yellow'>Prabhat</span> </p>
                                <p className='myIntro'> and I'm a Passionate</p>
                                <p className='myIntro'> <span className="yellow" ref={text} /></p>
                            </div>
                            <div className="btns d-flex ">
                                <a href="https://www.linkedin.com/in/prabhat-kumar-a3b5ba1a4" className="btn me-3 "> Download Resume</a>
                                <a href="https://www.linkedin.com/in/prabhat-kumar-a3b5ba1a4" className="btn me-3 " target="blank"> Visit Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='mainHr' />

            <section className="secondSection ">
                <div className="container ">
                    <h1 className='fs-3 yellow'>Past Experience</h1>

                    <div className="trackerBox">
                        <div className="horizontalLine"></div>
                        <div className="row gap-0 px-md-5 mx-md-5 mb-5">
                            <div className="col-12 col-md-3 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle">ImageX</div>
                                <div className="trackerBoxDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam blanditiis rem vitae dolores maxime alias iste porro pariatur, dicta asperiores dolore. Reiciendis?</div>
                            </div>
                            <div className="col-12 col-md-3 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle">ImageX</div>
                                <div className="trackerBoxDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam blanditiis rem vitae dolores maxime alias iste porro pariatur, dicta asperiores dolore. Reiciendis?</div>
                            </div>
                            <div className="col-12 col-md-3 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle">ImageX</div>
                                <div className="trackerBoxDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam blanditiis rem vitae dolores maxime alias iste porro pariatur, dicta asperiores dolore. Reiciendis?</div>
                            </div>
                            <div className="col-12 col-md-3 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle">ImageX</div>
                                <div className="trackerBoxDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam blanditiis rem vitae dolores maxime alias iste porro pariatur, dicta asperiores dolore. Reiciendis?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='mainHr' />

            <section className="thirdSection aboutMe">
                <div className="container">
                    <h1 className='fs-3 yellow text-md-end'>About Me</h1>

                    <div className="row">
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <img src={aboutme} alt="" className='w-50' />
                        </div>
                        <div className="col-12 col-md-8">
                            <p className='text-md-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam vel eligendi corrupti error harum tempora totam, mollitia quaerat voluptas reiciendis velit possimus incidunt temporibus, ea, consequuntur debitis dolor. Dolorum unde quae excepturi optio nisi similique doloribus sit aspernatur velit earum, architecto magnam aliquam aut molestiae eaque, ullam iste incidunt. Sit, distinctio facere adipisci quibusdam, neque quod culpa laboriosam illo commodi minus cumque molestias maiores repudiandae. Eum voluptas alias rem mollitia, vero officia suscipit aspernatur neque exercitationem animi expedita atque eligendi praesentium officiis eaque quibusdam recusandae facere consectetur tempore eveniet voluptatem quos doloribus. Quam, labore voluptas numquam fuga a repellat harum culpa dignissimos tenetur! Eius ad eligendi ratione autem corporis cupiditate atque amet! Ratione harum eos nulla sunt laudantium eius!</p>
                        </div>
                    </div>
                </div>
            </section >

            <hr className='mainHr' />

            <section className="fourthSection callToAction">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            
                            <div className="border border-opacity-50 border-3 rounded d-flex align-items-center justify-content-center w-100 h-100"><h1 className='fs-3 yellow '>Call To Action</h1></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text yellow">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Check me out
                                    </label>
                                </div>
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </section >

            
        </>
    )
}

export default Main