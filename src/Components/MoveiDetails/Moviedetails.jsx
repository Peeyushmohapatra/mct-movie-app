import React, { useEffect, useState } from 'react'
import "./moviedetails.css"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Moviedetails = () => {
    const {details} = useParams();
    const [myMovie,setMymovie] = useState({
        bigimage:"",
        movieName:"",
        movieRating:"",
        duration:"",
        discription:"",
        language:"",
        smallimage:"",
        status:"",
        genres:"",

    });

    const movie = useSelector((state) => {
        return state.all
    })


    useEffect(() => {
        const arr = movie.filter((ele) => {
            return ele.id == details
        })

        console.log(arr);
        setMymovie({
                bigimage:arr[0].backdrop_path,
                movieName:arr[0].original_title,
                movieRating:arr[0].vote_average,
                duration:arr[0].overview,
                discription:arr[0].overview,
                language:"",
                smallimage:arr[0].poster_path,
                status:"",
                genres:"",
                release:arr[0].release_date
        })
        console.log(myMovie);
    },[details])



    
  return (
    <div className="movieDetailsContainer">
      <div className="movieImageContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            myMovie && myMovie.bigimage
          }`}
        />
        <div className="lastImageContsiner"></div>
        
      </div>
      <div className="finalTrial">
          <div className="trial">
          <img
          src={`https://image.tmdb.org/t/p/original/${
            myMovie && myMovie.smallimage
          }`}
        />
          </div>

          <div className="movieFullDetails">
            <h2 className="movieTitle">{myMovie && myMovie.movieName}</h2>
            
            <p>
              Release Date: <span>{myMovie && myMovie.release}</span>{" "}
            </p>
            

            

            <p>
              Rating: <span>{myMovie && myMovie.movieRating}</span>{" "}
            </p>
            <p>
              Description: <span>{myMovie && myMovie.discription}</span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Moviedetails