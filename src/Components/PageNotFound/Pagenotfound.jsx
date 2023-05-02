import React from 'react'
import "./pagenotfound.css"
import { Link, useNavigate } from 'react-router-dom'


const Pagenotfound = ({setLogin}) => {
  const navigate = useNavigate()
  return (
    <div className='wrongPage'>
      <h1 className='wrongPathheading'>4 <span><i class="fa-solid fa-angle-left"></i> / <i class="fa-solid fa-angle-right"></i></span> 4</h1>
      <p className='pOne'>Error404 = <span>()</span> =<i class="fa-solid fa-angle-right"></i></p>
      <p className='pTwo'>message <span className='span'>=</span> <span className='spanOne'>"page not found";</span></p>
      
      <button className='backButton' onClick={() => {
        setLogin(true)
        navigate("/home")
      }}>Home</button>
    </div>
  )
}

// rgb(123,160,102)

export default Pagenotfound