import React from 'react'
import "./action.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Cardoverlay from '../Cardoverlay/Cardoverlay';


const Action = ({heading}) => {
    const movies = useSelector((state) => {
        return state.action
    })
  return (
    <div className='action'>
         <h1 className='heading'>Action <i id="ninja"className="fa-solid fa-user-ninja"></i></h1>
        <div className="movieCardContainer">

            {
                movies.length > 0 ? movies.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path ? movie.poster_path : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"}`} alt="" />
                        <Cardoverlay movie={movie} />
                    </div>
                        </Link>
                    )
    
                    }) : <img className='loadingIcon' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif' />
            }

        </div>
    </div>
  )
}

export default Action