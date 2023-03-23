import React, { useEffect, useState } from 'react'
import Login from './Login'


function Home() {
    const [name, setname] = useState("")
    const [user, setuser] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [form , setform] =  useState([])
    const [open , setopen ] = useState(true)

    useEffect(()=>{
        const saveuserdetails =  JSON.parse(localStorage.getItem('userdetails'))  || [];
        setform(saveuserdetails)
    },[])

    useEffect(()=>{
        localStorage.setItem("userdetails", JSON.stringify(form))
    },[form])

    function handlesubmit(e){
        e.preventDefault()
        const userdetails ={
            name : name,
            user : user,
            email : email,
            password : password,
        }
        setform([...form, userdetails])
        alert("RegisterSuccesfully")
        setopen(false)
    }


    if(open)    {
        return (
            <div className='home'>
                <div className='lefthome'>
                    <img src="images/quiz.webp"></img>
                </div>
                <div className='righthome'>
                    <form onSubmit={handlesubmit}> 
                        <input type='text' placeholder='Enter Your Name' onChange={(e)=>{setname(e.target.value)}} value={name}  required></input>
                        <input type='text' placeholder='Enter Your UserName' onChange={(e)=>{setuser(e.target.value)}}  value={user} required ></input>
                        <input type='email' placeholder='Enter Your Email' onChange={(e)=>{setemail(e.target.value)}} value={email} required ></input>
                        <input type='password' placeholder='Enter Password' onChange={(e)=>{setpassword(e.target.value)}} value={password} required></input>
                        <button type='submit'>Register</button>
                    </form>
                </div>
            </div>
          )
    }
    else{
        return(
            <Login/>
        )
    }

}

export default Home