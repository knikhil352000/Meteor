import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './Meteor.css'
const Meteor = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const question = ["What is DBMS", "What is PostgreSQL", "What is an API"];
    const [index, setIndex] = useState(0)
    const [quiz, setQuiz] = useState(question[0]);
    const xValue = [-windowWidth / 3, -windowWidth / 4, -windowWidth / 5, windowWidth / 3, windowWidth / 4, windowWidth / 5, 0];
    const [duration, setDuration] = useState(0)
    useEffect(() => {

        const myTimer = setInterval(() => {
            setIndex((prev) => prev + 1);
            setDuration(5000);
            console.log(index);
            setQuiz(question[index - 1])
        }, duration)
        if(index > question.length) {
            clearInterval(myTimer)
        }
        return () => clearInterval(myTimer)
    }, [index])
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
                <h3>{quiz}
                </h3>
            </div>
        </motion.div>
    )
}

export default Meteor
