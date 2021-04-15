import React from 'react'
import './Header.css'
const Header = ({start, setStart, check, score}) => {
    return (
        <div className='header'> 
            <div className='header__score'>
                <h3>SCORE: <span>{score}</span></h3>
            </div>
            <div className='header__indicator' style={{backgroundColor: check !== "non" ? check : 'transparent'}}>
                {
                    check === "non" ? <h3>GRAVITY</h3> : check === "green" ? <h3>CORRECT</h3> : <h3>WRONG</h3>
                }
            </div>
            {
                start ? <button className="header__exit" onClick={() => setStart(false)}>Exit</button> : <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/IntroRedAsteroid.0c200695fa93202.png" height={60} alt=""/>
            }
        </div>
    )
}

export default Header
