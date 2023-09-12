import React from 'react'

const Navbar = () => {
    return (
        <nav class="nav">
            {/* left side of Navbar */}
            <div className="logo">
                <h5 className=""> Prabhat Portfolio</h5>
            </div>

            {/* Right side of Navbar */}
            <div className="pages">
                <ul className="pageList d-flex  flex-wrap">
                    <li className="page"> <a href='/'> Home</a> </li>
                    <li className="page"> <a href='#projects'> Projects</a> </li>
                    <li className="page"> <a href='#aboutMe'> About Me</a> </li>
                    <li className="page"> <a href='#contactMe'> Contact Me</a> </li>
                </ul>
            </div>
            
        </nav>
        
    )
}

export default Navbar