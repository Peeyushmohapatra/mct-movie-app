import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <Link to="all"><li>All</li></Link>
        <Link to="comedy" ><li>Comedy</li></Link>
        <Link to="action" ><li>Action</li></Link>
        <Link to="popular" ><li>Popular</li></Link>
        <Link to="upcoming" ><li>Upcoming</li></Link>
        <Link to="toprated" ><li>Top-Rated</li></Link>
    </div>
  )
}

export default Sidebar