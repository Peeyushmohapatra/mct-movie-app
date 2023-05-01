import React from 'react'
import "./allmovies.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Allmovies = () => {
    const movies = useSelector((state) => {
        return state
    })
  return (
    <div className='random'>
        <h1>Popular</h1>
        <div className="popularContainer">
                {movies.popular ? movies.popular.map((movie) => {
                    console.log(movie,"Populat");
                    return (
                        <Link  to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : "Server Problem"}
        </div>
        <h1>Upcoming</h1>

        <div className="upcomingContainer">
        {movies.upcoming.length !== 0 ? movies.upcoming.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : <h1>Data Error</h1>}
        </div>
        <h1>Top-Rated</h1>

        <div className="topRatedContainer">
        {movies.top_rated ? movies.top_rated.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                    </div>
                        </Link>
                    )
                }) : "Server Problem"}
        </div>
        <h1>Comedy</h1>

        <div className="comedyContainer">
        {movies.comedy ? movies.comedy.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : "Server Problem"}
        </div>
        <h1>Action</h1>

        <div className="actionContainer">
        {movies.action ? movies.action.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : "Server Problem"}
        </div>
    </div>
  )}

export default Allmovies