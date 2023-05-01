import React from 'react'
import "./action.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const Action = ({heading}) => {
    const movies = useSelector((state) => {
        return state.action
    })
  return (
    <div className='action'>
         <h1 className='heading'>{heading}</h1>
        <div className="movieCardContainer">

            {
                movies.length > 0 ? movies.map((movie) => {
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

export default Action