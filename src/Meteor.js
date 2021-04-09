import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './Meteor.css'
const Meteor = ({ setQuiz, question, quiz}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const xValue = [-windowWidth / 4, -windowWidth / 5, windowWidth / 4, windowWidth / 5];
    const [index, setIndex] = useState(0)
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        const myTimer = setInterval(() => {
            setIndex((prev) => prev + 1);
            setDuration(8000);
            let i = index === 0 ? 0 : index - 1;
            setQuiz(question[i])
        }, duration)
        if(index > question.length) {
            clearInterval(myTimer)
        }
        return () => clearInterval(myTimer)
    }, [index]) // eslint-disable-line react-hooks/exhaustive-deps
    const initialVariant = {
        hidden: {
            opacity: 0.8,
            x: xValue[Math.floor(Math.random() * 8)],
            y: - windowHeight / 2 - 140,
        },
        show: {
            opacity: 1,
            y: windowHeight,
            transition: {
                repeat: question.length - 1,
                repeatType: 'loop',
                duration: 8,
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
                <h3>{quiz.q}</h3>
            </div>
        </motion.div>
    )
}

export default Meteor
