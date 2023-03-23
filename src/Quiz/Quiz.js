import React, { createContext, useState } from 'react'
import Header from './Header'
import "./Quiz.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Option from './Option'
import Score from './Score'
export const quizcontext = createContext(null)

function Quiz() {
    const [score, setscore] = useState(0)
    return (
        <quizcontext.Provider value={{score, setscore}}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path="/Option" element={<Option/>}></Route>
                <Route path="/Score" element={<Score/>}></Route>
            </Routes>
        </BrowserRouter>
        </quizcontext.Provider>
    )
}

export default Quiz