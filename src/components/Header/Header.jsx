import React from 'react';
import './Header.css';
import AnimatedLink from '../AnimatedLink/AnimatedLink';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className='navbar'>
                    <a className="navbar-brand" href="/#">
                        LOGO
                    </a>
                    {/* <button className="navbar-toggler"></button> */}
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <AnimatedLink href="/#" text="About" initialDelay={0}/>
                            </li>
                            <li className="nav-item">
                                <AnimatedLink href="/#" text="Video" initialDelay={200}/>
                            </li>
                            <li className="nav-item">
                                <AnimatedLink href="/#" text="Features" initialDelay={400}/>
                            </li>
                            <li className="nav-item">
                                <AnimatedLink href="/#" text="Feedback" initialDelay={600}/>
                            </li>
                            <li className="nav-item">
                                <AnimatedLink href="/#" text="FAQ" initialDelay={800}/>
                            </li>
                        </ul>
                    </div>
                    <a href="/#" className="navbar-button">
                        <button className='btn'>Buy Now</button>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header;