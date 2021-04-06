import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './Meteor.css'
const Meteor = ({setAnswer}) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const question = [
        {
            q: "The molecule used by cells to store genetic information is _____",
            a: "DNA"
        },
        {
            q: "The _____ is surrounded by a membrane, contains the cell's DNA, and acts as the control center",
            a: "nucleus"
        },
        {
            q: "Small structure within a cell that performs a specific function is the ______",
            a: "organelle"
        }
    ];
    const [index, setIndex] = useState(0)
    const [quiz, setQuiz] = useState(question[0]);
    const xValue = [-windowWidth / 3, -windowWidth / 4, -windowWidth / 5, windowWidth / 3, windowWidth / 4, windowWidth / 5, 0];
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        const myTimer = setInterval(() => {
            setIndex((prev) => prev + 1);
            setDuration(8000);
            let i = index === 0 ? 0 : index - 1;
            setQuiz(question[i])
            setAnswer(question[i].a);
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
