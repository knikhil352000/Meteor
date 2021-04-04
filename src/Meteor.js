import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './Meteor.css'
const Meteor = ({quiz}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const [animationComplete, setAnimationComplete] = useState(true);
    const click = () => {
      console.log(animationComplete);
    }
    const xValue = [-windowWidth / 3, -windowWidth / 4, -windowWidth / 5, windowWidth / 3, windowWidth / 4, windowWidth / 5, 0];
    setTimeout(() => {
        setAnimationComplete(false)
    }, 5000);
    const initialVariant = {
        hidden: {
            opacity: 0.8,
            x: xValue[Math.floor(Math.random() * 8)],
            y: - windowHeight / 2 - 100,
        },
        show: {
            opacity: 1,
            y: windowHeight,
            transition: {
                duration: 25,
                ease: 'linear',
            },
        },
    }
    return (
    <motion.div 
        className='meteor' 
        variants={initialVariant}
        initial='hidden'
        animate='show'
        onClick={click}
    >
        <div className='meteor__question'>
            <h3>{quiz}
            </h3>
        </div>
    </motion.div>
    )
}

export default Meteor
