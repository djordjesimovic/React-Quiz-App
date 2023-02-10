import { useState } from 'react';

import './App.css';
import { questions } from './Questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [end,setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1); 

  const handleQuestion = (isCorect) => {

    if(isCorect){
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
      setCount(count + 1);
    }
    else{
      setEnd(true);
    }
  }

  const reset = () => {
    setEnd(false);
    setScore(0);
    setCurrentQuestion(0);
    setCount(1);
  }

  return (
    <div className="App">
      {end ? (
        <div className='fianl-score'>
            <span>You scored {score} out of {questions.length}</span>
            <button onClick={reset} className="resetBtn">Reset</button>
        </div>
      ) : (
        <>
        <div className='qestion-sct'>
          <h1 className='main-heading'>
            Questions <span className='current-question'>{count}</span><span className='question-length'>/4</span>
          </h1>
          <div className='question'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='anwser-sct'>
          {
            questions[currentQuestion].answerOptions.map((anwserOption) => {
              return(
                <button className='anwser-btn' onClick={() => handleQuestion(anwserOption.isCorrect)}>{anwserOption.answerText}</button>
              )
            })
          }
        </div>
        </>
      )}
    </div>
  );
}

export default App;
