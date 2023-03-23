import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { quizcontext } from './Quiz';


function Option() {
  const [count, setcount] = useState(0)
  const [selectedOption, setselectedoption] = useState("")
  const { score, setscore } = useContext(quizcontext)
  const [timer, settimer] = useState(10)
  const navigate = useNavigate()
  const {wrong , setwrong} = useContext(quizcontext)

  const questions = [
    {
      question: "Q1:What is the capital city of France?",
      a: "Madrid",
      b: "Paris",
      c: "Rome",
      d: "Berlin",
      answer: "b"
    },
    {
      question: "Q2:Which planet is closest to the Sun?",
      a: "Venus",
      b: "Mars",
      c: "Mercury",
      d: "Jupiter",
      answer: "c"
    },
    {
      question: "Q3:Who invented the telephone?",
      a: "Alexander Graham Bell",
      b: "Thomas Edison",
      c: "Nikola Tesla",
      d: "Albert Einstein",
      answer: "a"
    },
    {
      question: "Q4:What is the largest animal in the world?",
      a: "Giraffe",
      b: "Elephant",
      c: "Blue whale",
      d: "Hippopotamus",
      answer: "c"
    },
    {
      question: "Q5:What is the capital city of Australia?",
      a: "Sydney",
      b: "Melbourne",
      c: "Canberra",
      d: "Brisbane",
      answer: "c"
    },
    {
      question: "Q6:Who painted the Mona Lisa?",
      a: "Pablo Picasso",
      b: "Leonardo da Vinci",
      c: "Vincent van Gogh",
      d: "Michelangelo",
      answer: "b"
    },
    {
      question: "Q7:What is the largest country in the world?",
      a: "Canada",
      b: "United States",
      c: "Russia",
      d: "China",
      answer: "c"
    },
    {
      question: "Q8:Which is the tallest mammal?",
      a: "Elephant",
      b: "Giraffe",
      c: "Hippopotamus",
      d: "Rhino",
      answer: "b"
    },
    {
      question: "Q9:What is the smallest continent?",
      a: "Europe",
      b: "Africa",
      c: "Australia",
      d: "Asia",
      answer: "c"
    },
    {
      question: "Q10:Who wrote the play 'Hamlet'?",
      a: "William Shakespeare",
      b: "George Bernard Shaw",
      c: "Oscar Wilde",
      d: "Samuel Beckett",
      answer: "a"
    }
  ]

  function handlechange(e) {
    setselectedoption(e.target.value)
  }

  useEffect(() => {
    if (timer === 0) {
      setcount(count + 1)
      settimer(10)
    }
    else {
      const timeend = setInterval(() => {
        settimer(timer - 1)
      }, 1000)
      return () => clearInterval(timeend)
    }
  }, [timer])


  function handlenext() {
    const checkanswer = questions[count].answer
    if (selectedOption === checkanswer) {
      setscore(score + 1)
    }
    else{
      setwrong([...wrong, questions[count]])
    }
    settimer(10)
  }
  if (count < questions.length) {
    return (
      <div className='option'>
        <p>{timer}</p>
        <h1>{questions[count].question}</h1>
        <ul>
          <li>
            <input type='radio' name='answer' className='answer' value="a" id='ans1' onChange={handlechange}></input>
            <label htmlFor='ans1' id="option1">{questions[count].a}</label>
          </li>
          <li>
            <input type='radio' name='answer' className='answer' value="b" id='ans2' onChange={handlechange}></input>
            <label htmlFor='ans2' id="option2">{questions[count].b}</label>
          </li>
          <li>
            <input type='radio' name='answer' className='answer' id='ans3' value='c' onChange={handlechange}></input>
            <label htmlFor='ans3' id="option3">{questions[count].c}</label>
          </li>
          <li>
            <input type='radio' name='answer' className='answer' id='ans4' value='d' onChange={handlechange}></input>
            <label htmlFor='ans4' id="option4">{questions[count].d}</label>
          </li>
        </ul>
      
      
        <button onClick={()=>{setcount(count + 1);handlenext() }}>Submit</button>
      </div>
    )
  }
  else {
    return (
     navigate("/Score")
    )
  }
}

export default Option