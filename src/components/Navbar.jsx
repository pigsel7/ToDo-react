import React from 'react'

const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            <a  className="navbar-brand" href="https://github.com/pigsel7/">PIGsel</a>
        </div>
        <ul className="navbar-nav">
            <li className='nav-item active'>
                <a className='nav-link' href="/">Home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href="/about">About</a>
            </li>
        </ul>
    </nav>
)

export default Navbar;
