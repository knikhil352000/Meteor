import React from 'react'
import './StartPage.css'
const StartPage = ({setStart}) => {
    return (
        <div className="startpage">
            <div className='startpage__image'>
                <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/IntroRedAsteroid.0c200695fa93202.png" height={100} alt=""/>
                <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/BlueLargeAsteroid@2x.848b4a45b4afee5.png" height={200} alt=""/>
                <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/BlueLargeAsteroid@2x.848b4a45b4afee5.png" height={300} alt=""/>
                <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/BlueLargeAsteroid@2x.848b4a45b4afee5.png" height={350} alt=""/>
                <img src="https://assets.quizlet.com/a/j/dist/i/gravity/asteroids/BlueLargeAsteroid@2x.848b4a45b4afee5.png" height={400} alt=""/>
            </div>
            <div className="startpage__button" onClick={() => setStart(true)}>
                <h3>Get Started</h3>
            </div>
        </div>
    )
}

export default StartPage
