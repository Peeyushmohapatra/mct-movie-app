import React from "react";
import "./comedy.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Comedy = ({ heading }) => {
  const movies = useSelector((state) => {
    return state.comedy;
  });
  console.log(movies);
  return (
    <div className="comedyMoviesContainer">
      <h1 className="heading">{heading}</h1>
      <div className="movieCardContainer">
        {movies.length > 0
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

export default Comedy;
