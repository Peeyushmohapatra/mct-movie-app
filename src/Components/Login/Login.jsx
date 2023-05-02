import React, { useState } from 'react'
import "./login.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ({setLogin}) => {
    const [state,setState] = useState({
        name:"",
        age:"",
        email:"",
        password:""
    })

    const validateUser = () => {
        if(state.name !== "" && state.age !== "" && state.email === "admin@gmail.com" && state.password === "abcd@1234"){
            return true
        }else{
            alert("Invalid Username and Password")
            return false
        }
    }
  return (
    <div className='mainLogincontainer'>
    <div className='loginContainer'>
        <div className="leftContainer">
            <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701195838.jpg" alt="" />
            <div className='blackShadow'></div>
        </div>
        <div className="rightContainer">
            <div className="headingContainer">
                <h1 className='heading'>Welcome back,</h1>
                <span className='gray'>Sign in to your account</span>
            </div>
            <div className="inputContainer">
            <div className='inputBox1'>
                <div className="leftInput">
                <label>Name</label>
                <input onChange={(e) =>{
                    setState({...state,name:e.target.value})
                }} placeholder='User Name' type="text" />
                </div>

                <div className="rightInput">
                <label onChange={(e) => {
                    setState({...state,age:e.target.value})
                }}>Age</label>
                <input onChange={(e) => {
                    setState({...state,age:e.target.value})
                }} placeholder='Age !!!' type="text" />
                </div>
                
                </div>
                <div className='inputBox'>
                <label>Email</label>
                <input placeholder='admin@gmail.com' type="email" onChange={(e) => {
                    setState({...state,email:e.target.value})

                }} />
                </div>
                <div className='inputBox'>
                <label>Password</label>
                <input placeholder='abcd@1234' type="password" onChange={(e) => {
                    setState({...state,password:e.target.value})
                }}/>
                </div>
                <p className='forgotPassword gray'>Forgot password?</p>
                <button onClick={() => {
                    localStorage.setItem("userInfo",JSON.stringify(state));
                    {if(validateUser()){
                        setLogin(true)
                    }
                }
                }}>Sign In</button>
            </div>
            <p className='lastP'>Don't have an account? <span>Sign Up</span></p>
        </div>
    </div>
    </div>
  )
}

export default Login