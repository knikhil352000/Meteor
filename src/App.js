import { motion, useAnimation } from 'framer-motion';
import {  useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import './Meteor.css'
import Check from './Check';
import Meteor from './Meteor';
import NewMeteor from './NewMeteor';
import Header from './Header';
import StartPage from './StartPage';
const App = () => {
  const question = [
    {
        type: "MCQ",
        q: "The molecule used by cells to store genetic information is _____",
        a: "DNA",
        optionA: "DNA",
        optionB: "Nucleus",
        optionC: "Cell",
        optionD: "Organelle",
    },
    {
        type: "Fill_In_The_Blanks",
        q: "The _____ is surrounded by a membrane, contains the cell's DNA, and acts as the control center",
        a: "nucleus"
    },
    {
        type: "Fill_In_The_Blanks",
        q: "Small structure within a cell that performs a specific function is the ______",
        a: "organelle"
    },
    
  ];
  // const control = useAnimation(); 
  // const [ref, inView] = useInView();
  // const [showAnimation, setShowAnimation] = useState(true);
  // const windowHeight = window.innerHeight;
  // const windowWidth = window.innerWidth;
  // const xValue = [-windowWidth / 4, -windowWidth / 5, windowWidth / 4, windowWidth / 5];
  // console.log(control.isAnimating());
  // const startAnimation = () => {
  //     setShowAnimation(!showAnimation);
  //     if(showAnimation) {
  //         control.start({
  //             opacity: 1,
  //             y: 200,
  //             transition: {
  //                 duration: 3,
  //                 ease: 'linear',
  //             },
  //         })
  //     }
  //     if(!showAnimation) {
  //         control.start({
  //             y: windowHeight - 320,
  //             transition: {
  //                 duration: 0
  //             }
  //         })
  //     }
      
  // }
  // useEffect(() => {
  //   if(options.toLowerCase() === quiz.a.toLowerCase()) {
  //     setCheck("green");
  //   } else {
  //     setCheck("red")
  //   }
  //   setTimeout(() => {
  //     setCheck("non")
  //   }, 1400)
  // }, [options]) // eslint-disable-line react-hooks/exhaustive-deps
  // const submitAnswer = (e) => {
  //   e.preventDefault();
  //   if(input.toLowerCase() === quiz.a.toLowerCase()) {
  //     setCheck("green");
  //   } else {
  //     setCheck("red")
  //   }
  //   setInput("");
  //   setTimeout(() => {
  //     setCheck("non")
  //   }, 1400)
  // }
  return (
    <div className="app">
      <Header />
      <StartPage />
      {/* <motion.div 
            className='meteor'
            animate={control}
            onClick={startAnimation}
            ref={ref}
        >
            <div className='meteor__question'>
            </div>
        </motion.div> */}
      <div className='app__image'>
      </div>
      {/* <form className="app__form" onSubmit={submitAnswer}>
        {
          quiz.type !== "MCQ" ? (
              <input type="text" autoFocus onChange={(e) => setInput(e.target.value)} value={input}/>
            ) : (
              <div className="app__mcq">
                <div className="app__options" onClick={() => setOptions(quiz.optionA)}>
                  <p>{quiz.optionA}</p>
                </div>
                <div className="app__options" onClick={() => setOptions(quiz.optionB)} >
                  <p>{quiz.optionB}</p>
                </div>
                <div className="app__options" onClick={() => setOptions(quiz.optionC)}>
                  <p>{quiz.optionC}</p>
                </div>
                <div className="app__options" onClick={() => setOptions(quiz.optionD)}>
                  <p>{quiz.optionD}</p>
                </div>
            </div>
            )
        }
      </form>
      {
        (check !== "non") && <Check check={check}/>
      }*/}
    </div> 
  )
}
export default App;
