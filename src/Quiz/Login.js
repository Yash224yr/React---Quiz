import React, { useState } from 'react'
import Option from './Option'

function Login() {
    const [checkuser, setuser] = useState("")
    const [checkpassword, setpassword] = useState("")
    const [go , setgo] = useState(true)



    function handlelogin(e){
        e.preventDefault()
        const getsaveddetails = JSON.parse(localStorage.getItem("userdetails")) || [] ;
        const founduser = getsaveddetails.filter(user => user.user === checkuser && user.password === checkpassword ) [0];
        if(founduser){
            alert("Login Successfuly")
            setgo(false)
        }
    }
    if(go){
        return (
            <div className='login'>
                <form onSubmit={handlelogin}>
                    <input type="text" placeholder='Enter Username' onChange={(e)=>setuser(e.target.value)} value={checkuser}></input>
                    <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} value={checkpassword}></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
          )
    }
    else{
        return(
            <Option/>
        )
    }
}

export default Login