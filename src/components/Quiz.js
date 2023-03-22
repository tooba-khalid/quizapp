import React, { useState } from 'react'
import {QuizData} from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[selectedoption,setSelectedoption]=useState(0);
    const[showResult,setShowResult]=useState(false);
   const changeQuestion=()=>{
    updateScore();
    if(currentQuestion<QuizData.length-1){
        setCurrentQuestion(currentQuestion+1)
        setSelectedoption(0)
    }
        else{
setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(selectedoption===QuizData[currentQuestion].answer)
        {setScore(score+1)}

    }
    const resetAll=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setSelectedoption(0);
        setShowResult(false);
    }
  return (
    <div>
   <p className='heading-txt'>SOLVE THE QUIZ</p>
   <div className="container">
    {showResult?(<QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>):
    (<>
   <div className="question">
    <span id="question-number">{currentQuestion+1}</span>
    <span id="question-txt">{QuizData[currentQuestion].question}</span>
   </div>

    
    <div className="option-container">
        {QuizData[currentQuestion].options.map((option,i) => {
            
            return (
                <button className={`option-btn ${selectedoption===i+1?"checked":null}`}key={i} onClick={()=>setSelectedoption(i+1)} >
{option}
                </button>
            )
        })}
    </div>
    <input type="button" value='Next' id='next-button' onClick={changeQuestion} />
    
    
    </>)}
   </div>
    </div>
  )
}

export default Quiz
