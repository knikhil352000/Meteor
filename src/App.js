import {  useState } from 'react';
import './App.css';
import Check from './Check';
import Meteor from './Meteor';
const App = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState('');
  const [check, setCheck] = useState("non");
  const submitAnswer = (e) => {
    e.preventDefault();
    if(input.toLowerCase() === answer.toLowerCase()) {
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
      <Meteor setAnswer={setAnswer}/>
      <div className='app__image'>
      </div>
      <form className="app__form" onSubmit={submitAnswer}>
        <input type="text" autoFocus onChange={(e) => setInput(e.target.value)} value={input}/>
      </form>
      {
        (check !== "non") && <Check check={check}/>
      }
    </div>
  )
}
export default App;
