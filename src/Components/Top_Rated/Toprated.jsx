import React from 'react'
import "./toprated.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";



const Toprated = ({heading}) => {
    const movies = useSelector((state) => {
        return state.top_rated
    })
  return (
    <div className='toprated'>
         <h1 className='heading'>{heading}</h1>
        <div className="movieCardContainer">

            {
                movies ? movies.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>

                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                    </div>
                        </Link>
                    )
    
                    }) : "Hello"
            }

        </div>
    </div>
  )
}

export default Toprated