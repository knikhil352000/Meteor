import React from 'react'
import './Gameover.css'
import image from './images/gameover.jpg'
const Gameover = ({score}) => {
    return (
        <div className='gameover'>
            <img src={image} alt="" className='gameover__image'/>
            <h1>YOUR SCORE : {score}</h1>
        </div>
    )
}

export default Gameover
