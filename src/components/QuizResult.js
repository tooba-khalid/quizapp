import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'> 
      YOUR SCORE: {props.score}<br/>
      TOTAL SCORE: {props.totalScore}

    </div>
    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
