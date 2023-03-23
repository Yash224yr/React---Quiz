import React, { useContext } from 'react'
import { quizcontext } from './Quiz'

function Score() {
    const {score} = useContext(quizcontext)
  return (
    <div className='score'>
        <h1>Correct Answer : {score}</h1>
        <h1>Wrong Answer </h1>
    </div>
  )
}

export default Score