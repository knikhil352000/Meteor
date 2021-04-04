import './App.css';
import React,{ useEffect, useRef, useState } from 'react';
import Meteor from './Meteor';
function App() {
  const question = ["What is DBMS", "What is PostgreSQL", "What is an API"];
  return (
    <div className="app">
      {
        question.map((quiz) => (
          <Meteor quiz={quiz}/>
        ))
      }
      <div className='app__image'>
      </div>
    </div>
  )
}
export default App;
