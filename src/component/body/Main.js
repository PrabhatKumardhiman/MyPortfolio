import React, { useEffect, useRef } from 'react'
import developer from './developer.png'
import Typed from 'typed.js';
import aboutme from './aboutme.png'
import resume from './resume.pdf'

const Main = () => {

    const text = useRef(null);

    // Adding Animation of typing On Load
    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ['Web Developer', 'Web Designer', '&amp; MERN Stack Developer'],
            typeSpeed: 70,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
            <section className="firstSection" id='home'>
                <div className="container my-3">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="mainRight col-12 col-md-6 d-flex align-items-center justify-content-center " >
                            <img src={developer} alt="" className='w-50' />
                        </div>
                        <div className=" mainLeft col-12 col-md-6 fs-2 d-flex flex-column align-items-center order-md-first">
                            <div className="introSection d-flex flex-column justify-content-center">
                                <p className='myIntro'>Hi, My Name is <span className='yellow ms-1'>Prabhat</span> </p>
                                <p className='myIntro'> and I'm a Passionate</p>
                                <p className='myIntro'> <span className="yellow" ref={text} /></p>
                            </div>
                            <div className="btns d-flex ">
                                <a href={resume} download className="btn me-3 "> Download Resume</a>
                                <a href="https://github.com/PrabhatKumardhiman" className="btn me-3 " target="blank"> Visit Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='mainHr' />

            <section className="secondSection px-2" id='projects'>
                <div className="container ">
                    <h1 className='fs-3 yellow'>Past Experience</h1>

                    <div className="trackerBox">
                        <div className="row gap-0 px-md-5 mx-md-5 mb-5 ">
                        <div className="horizontalLine"></div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://prabhatkumardhiman.github.io/ImageX/">ImageX</a></div>
                                <div className="trackerBoxDescription">ImageX is your go-to platform for effortlessly finding the images you desire. Whether you're searching for breathtaking landscapes, cute animal photos, or inspiration for your next project, ImageX has you covered. With a user-friendly interface and powerful search algorithms, our platform allows users to enter keywords or use advanced filters to pinpoint the perfect image. Explore a vast library of high-quality images from various sources and discover the visual content that resonates with you. ImageX simplifies the search process and brings your vision to life with just a few clicks. Say goodbye to endless scrolling and hello to a more efficient, enjoyable image search experience with ImageX.</div>
                            </div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://ciphervault.netlify.app/">CipherVault</a></div>
                                <div className="trackerBoxDescription">CipherVault is a user-friendly password management solution designed to help you safeguard and organize your digital credentials effortlessly. With CipherVault, you can securely store, generate, and access your passwords and sensitive information, all within a highly encrypted and easily accessible platform. Say goodbye to the stress of remembering numerous passwords and enjoy peace of mind knowing your digital life is protected with CipherVault.</div>
                            </div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://prabhatkumardhiman.github.io/WeatherApp/">WeatherApp</a></div>
                                <div className="trackerBoxDescription">WeatherApp is your one-stop solution for up-to-the-minute weather information. Whether you're planning a weekend getaway, organizing outdoor activities, or simply want to stay prepared for the day ahead, WeatherApp has you covered. With a user-friendly interface and real-time data, you can easily access accurate weather forecasts, current conditions, and detailed meteorological insights for any location worldwide. Stay informed, make informed decisions, and never be caught off guard by the weather again with WeatherApp. Stay ahead of the elements, with WeatherApp!</div>
                            </div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://prabhatkumardhiman.github.io/Calculator/">Calculator</a></div>
                                <div className="trackerBoxDescription">This simple yet stylish calculator combines the beauty of minimalist design with the efficiency of a powerful calculation tool. With its intuitive interface and modern aesthetic, it's perfect for anyone seeking a calculator that not only performs calculations with precision but also elevates your workspace with its timeless elegance. Experience the perfect blend of functionality and aesthetics with our simple but stylish calculator.</div>
                            </div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://prabhatkumardhiman.github.io/ypatrol-bank-details/">Bankify</a></div>
                                <div className="trackerBoxDescription">Introducing "Bankify Weather Insights" – a cutting-edge project that seamlessly combines financial data and real-time weather information. Built using Node.js and Express for the robust backend and featuring a sleek React and Bootstrap frontend, Bankify Weather Insights is your one-stop solution for storing bank information alongside the latest weather updates.

                                    With the power of RESTful APIs, this innovative platform allows users to effortlessly retrieve bank details by entering the IFSC code. Simultaneously, it provides city-specific weather insights, ensuring you're always in the know about local conditions.

                                    Experience the fusion of finance and meteorology like never before with Bankify Weather Insights – where banking meets weather forecasting, and convenience meets sophistication. </div>
                            </div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://prabhatkumardhiman.github.io/Beer/">Beer App</a></div>
                                <div className="trackerBoxDescription">Beerpedia is your go-to beer app, offering a diverse and extensive collection of beers from around the world, all at your fingertips. Whether you're a seasoned beer enthusiast or just looking to discover new flavors, Beerpedia has you covered. This innovative app is developed using React.js and leverages RESTful APIs to provide an unparalleled user experience.

                                </div>
                            </div>
                        <div className="horizontalLine mt-4"></div>
                            <div className="col-12 col-md-2 mycol">
                                <div className="verticalLine"></div>
                                <div className="trackerBoxTitle"><a className="text-decoration-none yellow" href="https://cloudbook-prabhat.netlify.app/">CloudBook</a></div>
                                <div className="trackerBoxDescription">CloudBook is a cutting-edge cloud-based Node.js application designed to revolutionize the way you manage your day-to-day notes. With seamless accessibility from any device with an internet connection, CloudBook ensures that your notes are always at your fingertips, whether you're at home, in the office, or on the go. Say goodbye to scattered sticky notes and disorganized notebooks—CloudBook streamlines your note-taking process, offering secure storage, easy retrieval, and an intuitive user interface. Elevate your productivity and organization with CloudBook, your go-to platform for effortless note management in the digital age.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='mainHr' />

            <section className="thirdSection aboutMe px-2 pe-md-4" id="aboutMe">
                <div className="container">
                    <h1 className='fs-3 yellow me-4'>About Me</h1>

                    <div className="row">
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <img src={aboutme} alt="" className='w-50' />
                        </div>
                        <div className="col-12 col-md-8">
                            <p className=''>Hello! I'm <span className='yellow'> Prabhat Kumar </span>, a passionate web developer with a fresh perspective and a strong foundation in modern web technologies. I specialize in the <span className='yellow'>MERN (MongoDB, Express.js, React.js, Node.js) stack </span> , and I'm eager to embark on a journey to create innovative and user-friendly web solutions.

                                My journey into web development began with a curiosity-driven exploration of coding, and it quickly turned into a full-blown passion. Armed with a solid understanding of<span className='yellow'> HTML, CSS, and JavaScript</span>, I delved into the world of <span className='yellow'> MERN stack development </span>, where I honed my skills to create dynamic, interactive, and responsive web applications.

                                During my learning journey, I developed a deep appreciation for clean, maintainable code and user-centric design. I am enthusiastic about crafting seamless user experiences and ensuring that every line of code I write contributes to the functionality and aesthetics of a project.

                                My proficiency in  <span className='yellow'> React.js </span>enables me to build beautiful and efficient front-end interfaces, while <span className='yellow'>Node.js and Express.js</span> empower me to create robust <span className='yellow'>server-side solutions</span> . I have also embraced<span className='yellow'> MongoDB and Mongoose for database management</span>, allowing me to seamlessly store and retrieve data to support the functionality of web applications.

                                What sets me apart is not just my technical skills but also my commitment to continuous learning. I am always exploring the latest trends and best practices in web development to stay ahead of the curve. I thrive in collaborative environments, where I can work alongside talented individuals to transform ideas into functional, user-friendly applications.

                                As a fresh web developer, I'm excited about the opportunities to contribute to meaningful projects, expand my skills, and make a positive impact in the ever-evolving world of web development.

                                Let's collaborate and bring your web ideas to life! Feel free to reach out to me at <span className='yellow'><a href="mailto:prabhatkumardhi@gmail.com" className='text-decoration-none yellow'>prabhatkumardhi@gmail.com</a></span>, and let's discuss how I can help you achieve your digital goals.</p>
                        </div>
                    </div>
                </div>
            </section >

            <hr className='mainHr' />

            <section className="fourthSection callToAction px-2" id="contactMe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">

                            <div className="border border-opacity-50 border-3 rounded d-flex align-items-center justify-content-center w-100 h-100"><h1 className='fs-3 yellow '>Call To Action</h1></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className=''>
                                <div className="mb-3 fs-3">
                                    <label htmlFor="exampleInputEmail1" className=" fs-5 fs-5">
                                        Email address
                                    </label>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        prabhatkumardhi@gmail.com
                                    </h6>
                                </div>
                                <div className="mb-3 fs-3">
                                    <label htmlFor="exampleInputEmail1" className=" fs-5">
                                        Name
                                    </label>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        Prabhat Kumar
                                    </h6>
                                </div>
                                <div className="mb-3 fs-3">
                                    <label htmlFor="exampleInputEmail1" className=" fs-5">
                                        Phone No.
                                    </label>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        +91-8057688368
                                    </h6>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        +91-9837470197
                                    </h6>
                                </div>
                                <div className="mb-3 fs-3">
                                    <label htmlFor="exampleInputEmail1" className=" fs-5">
                                        Current Location
                                    </label>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        Sector - 72, Noida, UttarPradesh (201304)
                                    </h6>
                                </div>
                                <div className="mb-3 fs-3">
                                    <label htmlFor="exampleInputEmail1" className=" fs-5">
                                        HomeTown
                                    </label>
                                    <h6 className="yellow" style={{ fontSize: "12px" }}>
                                        Jwalapur, Haridwar, Uttarakhand (249407)
                                    </h6>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section >


            <section className="lastSection ">
                <div className="container">
                    <footer className="row gap-3  d-flex justify-content-between">
                        <div className="col-4 col-md-3">
                            <h5>React.Js Projects</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/PrabhatKumardhiman/ImageX" className="nav-link p-0 text-light">
                                        ImageX
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/PrabhatKumardhiman/WeatherApp" className="nav-link p-0 text-light">
                                        WeatherApp
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/PrabhatKumardhiman/Calculator" className="nav-link p-0 text-light">
                                        Calculator
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/PrabhatKumardhiman/BMI-Calculator" className="nav-link p-0 text-light">
                                        BMI-Calculator
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 col-md-3">
                            <h5>Node.Js Projects</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="https://6509fd9b5bf8994208ce30d7--vermillion-peony-51e7b3.netlify.app" className="nav-link p-0 text-light">
                                        CipherVault
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://6509fd9b5bf8994208ce30d7--vermillion-peony-51e7b3.netlify.app" className="nav-link p-0 text-light">
                                        CloudBook
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className='mx-auto'>
                                <h5>Profile Links</h5>
                                <p><a className='text-decoration-none yellow' href="https://www.linkedin.com/in/prabhat-kumar-a3b5ba1a4/" target='blank'>LinkedIn</a></p>
                                <p><a className='text-decoration-none yellow' href="https://github.com/PrabhatKumardhiman" target='blank'>GitHub</a></p>
                                <p><a className='text-decoration-none yellow' href="https://github.com/PrabhatKumardhiman" target='blank'>Naukri</a></p>

                            </div>
                        </div>
                    </footer>
                    <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                        <p className='mx-auto '>© 2023 Company, Inc. All rights reserved.</p>
                        {/* <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="/">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="/">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis text-light" href="/">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul> */}
                    </div>

                </div>
            </section>


        </>
    )
}

export default Main