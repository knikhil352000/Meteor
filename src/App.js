import {  useEffect, useState } from 'react';
import './App.css';
import Check from './Check';
import Meteor from './Meteor';
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
    }
  ];
  const [input, setInput] = useState("");
  const [check, setCheck] = useState("non");
  const [quiz, setQuiz] = useState(question[0]);
  const [options, setOptions] = useState("");
  useEffect(() => {
    if(options.toLowerCase() === quiz.a.toLowerCase()) {
      setCheck("green");
    } else {
      setCheck("red")
    }
    setTimeout(() => {
      setCheck("non")
    }, 1400)
  }, [options]) // eslint-disable-line react-hooks/exhaustive-deps
  const submitAnswer = (e) => {
    e.preventDefault();
    if(input.toLowerCase() === quiz.a.toLowerCase()) {
      setCheck("green");
    } else {
      setCheck("red")
    }
    setInput("");
    setTimeout(() => {
      setCheck("non")
    }, 1400)
  }
  return (
    <div className="app">
      <Meteor setQuiz={setQuiz} question={question} quiz={quiz}/>
      <div className='app__image'>
      </div>
      <form className="app__form" onSubmit={submitAnswer}>
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
      }
    </div>
  )
}
export default App;
