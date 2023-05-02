import React from 'react'
import "./allmovies.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cardoverlay from '../Cardoverlay/Cardoverlay'

const Allmovies = () => {
    const movies = useSelector((state) => {
        return state
    })
  return (
    <div className='random'>
        <h1 className='movieHeading'>Popular Movies</h1>
        <div className="popularContainer">
                {movies.popular.length !== 0 ? movies.popular.map((movie) => {
                    return (
                        <Link  to={`/moviedetails/${movie.id}`}>
                        <div key={movie.id} className="cardss">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        <Cardoverlay movie={movie}  />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Please Wait <i className="fa-solid fa-spinner-third fa-spin"></i></h2>}
        </div>
        <h1 className='movieHeading'>Upcoming Movies</h1>

        <div className="upcomingContainer">
        {movies.upcoming.length !== 0 ? movies.upcoming.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div key={movie.id} className="cardss">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        <Cardoverlay movie={movie} />

                        </div>
                        </Link>
                    )
                }) :<h2 className='alert'>Please Wait <i className="fa-solid fa-spinner-third fa-spin"></i></h2>}
        </div>
        <h1 className='movieHeading'>Top-Rated Movies</h1>

        <div className="topRatedContainer">
        {movies.top_rated.length !== 0 ? movies.top_rated.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div key={movie.id} className="cardss">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        <Cardoverlay movie={movie} />

                    </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Please Wait <i class="fa-duotone fa-spinner-third"></i></h2>}
        </div>
        <h1 className='movieHeading'>Comedy Movies</h1>

        <div className="comedyContainer">
        {movies.comedy.length !== 0 ? movies.comedy.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div key={movie.id} className="cardss">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                        <Cardoverlay movie={movie} />

                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Please Wait <i className="fa-solid fa-spinner-third fa-spin"></i></h2>}
        </div>
        <h1 className='movieHeading'>Action Movies</h1>

        <div className="actionContainer">
        {movies.action.length !== 0 ? movies.action.map((movie) => {
                    return (
                        <Link to={`/moviedetails/${movie.id}`}>
                        <div key={movie.id} className="cardss">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
                         <Cardoverlay movie={movie} />
                        </div>
                        </Link>
                    )
                }) : <h2 className='alert'>Please Wait <i className="fa-solid fa-spinner-third fa-spin"></i></h2>}
        </div>
    </div>
  )}

export default Allmovies