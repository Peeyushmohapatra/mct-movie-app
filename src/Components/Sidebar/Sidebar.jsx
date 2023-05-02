import React from 'react'
import "./sidebar.css"
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <NavLink to="all"><li>All</li></NavLink>
        <NavLink to="comedy" ><li>Comedy</li></NavLink>
        <NavLink to="action" ><li>Action</li></NavLink>
        <NavLink to="popular" ><li>Popular</li></NavLink>
        <NavLink to="upcoming" ><li>Upcoming</li></NavLink>
        <NavLink to="toprated" ><li>Top-Rated</li></NavLink>
    </div>
  )
}

export default Sidebar