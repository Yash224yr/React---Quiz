import React from 'react'
import { Link } from 'react-router-dom'
import Score from './Score'

function Header() {
    return (
        <div className='head'>
            <div className='lefthead'>
                <h1>Quiz Pop</h1>
            </div>
            <div className='righthead'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to="/score" >Score</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header