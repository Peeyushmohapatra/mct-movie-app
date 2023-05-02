import React from 'react'
import "./popular.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Cardoverlay from '../Cardoverlay/Cardoverlay';


const Popular = ({heading}) => {
    const movies = useSelector((state) => {
        return state.popular
    })
  return (
    <div className='popular'>
         <h1 className='heading'>Popular Movies <i className="fa-solid fa-fire-flame-curved"></i></h1>
        <div className="movieCardContainer">

            {
                movies.length > 0 ? movies.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>

                    <div key={movie.id} className="card">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        <Cardoverlay movie={movie} />
                    </div>
                        </Link>
                    )
    
                    }) :<img className='loadingIcon' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif' />
            }

        </div>
    </div>
  )
}

export default Popular