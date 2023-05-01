import React from "react";
import "./upcoming.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Upcoming = ({ heading }) => {
  const movies = useSelector((state) => {
    return state.upcoming;
  });
  return (
    <div className="upcoming">
      <h1 className="heading">{heading}</h1>
      <div className="movieCardContainer">
        {movies
          ? movies.map((movie) => {
              return (
                <Link to={`/moviedetails/${movie.id}`}>
                  <div className="card">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${
                        movie && movie.poster_path
                      }`}
                      alt=""
                    />
                  </div>
                </Link>
              );
            })
          : "Hello"}
      </div>
    </div>
  );
};

export default Upcoming;
