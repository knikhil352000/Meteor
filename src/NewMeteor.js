import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Meteor.css'
const NewMeteor = () => {
    const control = useAnimation(); 
    const [ref, inView] = useInView();
    const [showAnimation, setShowAnimation] = useState(true);
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const xValue = [-windowWidth / 4, -windowWidth / 5, windowWidth / 4, windowWidth / 5];
    // console.log(control.isAnimating());
    const startAnimation = () => {
        setShowAnimation(!showAnimation);
        if(showAnimation) {
            control.start({
                opacity: 1,
                y: 200,
                transition: {
                    duration: 3,
                    ease: 'linear',
                },
            })
        }
        if(!showAnimation) {
            control.start({
                y: windowHeight - 320,
                transition: {
                    duration: 0
                }
            })
        }
    }

    return (
        <motion.div 
            className='meteor' 
            initial={{y: -100}}
            animate={control}
            onClick={startAnimation}
            ref={ref}
        >
            <div className='meteor__question'>
            </div>
        </motion.div>
    )
}

export default NewMeteor
