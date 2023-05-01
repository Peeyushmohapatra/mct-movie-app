import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'

const Navber = ({setLogin}) => {
    const [name,setName] = useState("Unknown");
    const [movieName,setMoviename] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        console.log();
        setName(JSON.parse(localStorage.getItem("userInfo")))
    },[])
  return (
    <div className='navbar'>
        <div className="iconContainer">
            <Link to="/home">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/stylized-camera-6256571-5121729.png" alt="" />
            </Link>
        </div>
        <div className="inputtContainer">
            <input onChange={(e) => {
                setMoviename(e.target.value)
            }} placeholder='Search any movies' type="text" />
            <Link className='searchButton' to={`/search/${movieName}`}>
            <button>Search</button>
            </Link>
        </div>
        <div className="logoutContainer">
            <p>Welcome : {name.name !== "Unknown" && name.name}</p>
            <button onClick={() => {
                setLogin(false)
                navigate("/")
            }}>Logout</button>
        </div>
    </div>
  )
}

export default Navber