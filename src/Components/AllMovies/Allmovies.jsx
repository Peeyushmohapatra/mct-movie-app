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
        <h1 className='movieHeading'>Popular</h1>
        <div className="popularContainer">
                {movies.popular.length !== 0 ? movies.popular.map((movie) => {
                    console.log(movie,"Populat");
                    return (
                        <Link  to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>}
        </div>
        <h1 className='movieHeading'>Upcoming</h1>

        <div className="upcomingContainer">
        {movies.upcoming.length !== 0 ? movies.upcoming.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>}
        </div>
        <h1 className='movieHeading'>Top-Rated</h1>

        <div className="topRatedContainer">
        {movies.top_rated.length !== 0 ? movies.top_rated.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                    </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>}
        </div>
        <h1 className='movieHeading'>Comedy</h1>

        <div className="comedyContainer">
        {movies.comedy.length !== 0 ? movies.comedy.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>}
        </div>
        <h1 className='movieHeading'>Action</h1>

        <div className="actionContainer">
        {movies.action.length !== 0 ? movies.action.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div className="cards">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Unable to show data.Please try after sometime.Sorry for inconvenience.</h2>}
        </div>
    </div>
  )}

export default Allmovies