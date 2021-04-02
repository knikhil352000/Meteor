import { motion } from 'framer-motion'
import React from 'react'
import './Meteor.css'
const Meteor = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const xValue = [-windowWidth / 3, -windowWidth / 4, -windowWidth / 5, windowWidth / 3, windowWidth / 4, windowWidth / 5];
    const initialVariant = {
        hidden: {
            opacity: 0.8,
            x: xValue[Math.floor(Math.random() * 7)],
            y: - windowHeight / 2 - 100,
        },
        show: {
            opacity: 1,
            y: windowHeight / 2 - 200,
            transitionEnd: {
                rotate: 180
            },
            transition: {
                duration: 5,
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
        >
            <div className='meteor__question'>
                <h3>What is powerhouse of cell?
                    Mitochondria is powerhouse of cell
                </h3>
            </div>
        </motion.div>
    )
}

export default Meteor
