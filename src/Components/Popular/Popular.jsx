import React from 'react'
import "./popular.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const Popular = ({heading}) => {
    const movies = useSelector((state) => {
        return state.popular
    })
  return (
    <div className='popular'>
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
    
                    }) : <h2>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>
            }

        </div>
    </div>
  )
}

export default Popular