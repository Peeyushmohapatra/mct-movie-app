import React from 'react'
import "./home.css"
import Sidebar from '../Sidebar/Sidebar'
import Allmovies from '../AllMovies/Allmovies'
import Comedy from '../Comedy/Comedy'
import Action from '../Action/Action'
import Popular from '../Popular/Popular'
import Upcoming from '../Upcoming/Upcoming'
import Toprated from '../Top_Rated/Toprated'
import Random from '../Random/Random'
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