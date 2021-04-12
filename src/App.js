import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import './Meteor.css'
import Header from './Header';
import StartPage from './StartPage';
const App = () => {
  const question = [
    {
      type: "Fill_In_The_Blanks",
      q: "The _____ is surrounded by a membrane, contains the cell's DNA, and acts as the control center",
      a: "nucleus"
    },
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
      q: "Small structure within a cell that performs a specific function is the ______",
      a: "organelle"
    },
  ];
  const [start, setStart] = useState(false);
  const control = useAnimation(); 
  const [ref, inView] = useInView();
  const [showAnimation, setShowAnimation] = useState(true);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [showMeteor, setShowMeteor] = useState(true);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState("non");
  const windowWidth = window.innerWidth;
  const xValue = [-windowWidth / 4, -windowWidth / 5, windowWidth / 4, windowWidth / 5];
  useEffect(() => {
    if(inView) {
      control.start({
        y: window.innerHeight + 350,
        transition: {
          duration: 15,
          ease: "linear"
        }
      })
    }
    if(!inView) {
      setIndex(prev => prev + 1);
      control.start({
        x: xValue[Math.floor(Math.random() * xValue.length)],
        y: -450,
        transition: {
          duration: 0,
          ease: 'linear'
        }
      })
    }
  },[inView])
  const checkMCQ = (e) => {
    console.log(e);
    if(e.target.dataset.options.toLowerCase() === question[index - 1].a.toLowerCase()) {
      setScore(prev => prev + 4);
      setCheck("green")
    } else {
      setCheck("red")
    }
    setShowMeteor(false)
    setInput("");
    setTimeout(() => {
      setCheck("non")
      setShowMeteor(true)
    }, 1400)
  }
  const submitAnswer = (e) => {
    e.preventDefault();
    if(input.toLowerCase() === question[index - 1].a.toLowerCase()) {
      setScore(prev => prev + 4);
      setCheck("green")
    } else {
      setCheck("red")
    }
    setShowMeteor(false)
    setInput("");
    setTimeout(() => {
      setCheck("non")
      setShowMeteor(true)
    }, 1400)
  }
  return (
    <div className="app">
      <Header start={start} setStart={setStart} check={check} score={score}/>
      {
        !start ? (
          <StartPage setStart={setStart}/>
        ) : (
          <>
            {
              showMeteor && <motion.div
              className='meteor'
              animate={control}
              ref={ref}
              initial={{y: -350, x: -350}}
            >
              <div className='meteor__question'>
                {
                  question[index - 1] ? <h3>{question[index - 1].q}</h3> : <h3>GAME OVER</h3>
                }
              </div>
            </motion.div>
            }
            <div className='app__image'>
            </div>
            <form className="app__form" onSubmit={submitAnswer}>
              {
                question[index - 1].type !== "MCQ" ? (
                  <input type="text" autoFocus onChange={(e) => setInput(e.target.value)} value={input} />
                ) : (
                  <div className="app__mcq">
                    <div className="app__options" data-options={question[index - 1].optionA} onClick={checkMCQ}>
                      {inView && `${question[index - 1].optionA}` }
                    </div>
                    <div className="app__options" data-options={question[index - 1].optionB} onClick={checkMCQ} >
                      {inView && `${question[index - 1].optionB}` }
                    </div>
                    <div className="app__options" data-options={question[index - 1].optionC} onClick={checkMCQ}>
                      {inView && `${question[index - 1].optionC}` }
                    </div>
                    <div className="app__options" data-options={question[index - 1].optionD} onClick={checkMCQ}>
                      {inView && `${question[index - 1].optionD}` }
                    </div>
                  </div>
                )
              }
            </form>
          </>
        )
      }
    </div>
  )
}
export default App;
