import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'> 
            <div className='header__score'>
                <h3>SCORE: <span>10</span></h3>
            </div>
            <div className='header__indicator'>
                <h3>Wrong Answer</h3>
            </div>
            <button>Exit</button>
        </div>
    )
}

export default Header
