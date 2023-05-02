import React from 'react'
import "./home.css"
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className="leftSide">
        <Sidebar/>
        </div>
        <div className='contentContainer'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home