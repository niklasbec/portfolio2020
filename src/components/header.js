import React from 'react';
import { Link } from 'react-router-dom'
import { a, useSpring } from 'react-spring'

function Header() {

    const headerSpring = useSpring({
        config: {
            mass: 5,
            tension: 20,
            clamp: true
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: 0
    })

  return (
    <div className="header">
        <a.div style={headerSpring} className='nav'>
            <Link to='/'><span className='logo'>NIKLAS BECKER</span></Link>

            <ul>
                <Link to='#'><li>PROJECTS</li></Link>
            </ul>
        </a.div>
    </div>
  );
}

export default Header;
