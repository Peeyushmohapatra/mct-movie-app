import React, { useEffect, useState } from "react";
import "./search.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cardoverlay from "../Cardoverlay/Cardoverlay";


const Search = () => {

  const [searchMovies,setSearchmovie] = useState([])

  const movies = useSelector((state) => {
    return state.all;
  });

  const {movieName}  = useParams()

  useEffect(() => {
      setSearchmovie(movies.filter((ele) => {
        if(ele.original_title.toUpperCase().includes(movieName.toUpperCase())){
            return ele
        } 
      }))
  },[movieName])

 

  return (
    <div className="searchDiv" >
        <h1 style={{textAlign:"center",color:"rgb(13,154,252)",fontFamily:"Arial"}}>Result For: {movieName}</h1>
      <div className="movieCardContainer">
        {searchMovies.length > 0 ? searchMovies.map((movie) => {
            return (
                <Link to={`/moviedetails/${movie.id}`}>

                <div className="card">
            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
            <Cardoverlay movie={movie} />
        </div> 
                </Link>
            )
        }) : <>Movie Not Found</>}

        </div>
      
    </div>
  );
};

export default Search;

{
  /* <div className="card">
            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="" />
        </div> */
}
