import React from 'react'

const Navbar = () => {
    return (
        <nav class="nav">
            {/* left side of Navbar */}
            <div className="logo">
                <h5> Prabhat Portfolio</h5>
            </div>

            {/* Right side of Navbar */}
            <div className="pages">
                <ul className="pageList">
                    <li className="page"> <a href='/'> Home</a> </li>
                    <li className="page"> <a href='/'> Projects</a> </li>
                    <li className="page"> <a href='/'> Services</a> </li>
                    <li className="page"> <a href='/'> Contact Me</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar