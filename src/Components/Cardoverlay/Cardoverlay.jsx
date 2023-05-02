import React from 'react'
import "./cardoverlay.css"


const Cardoverlay = ({movie}) => {
  return (
    <div className="cardOverlay">
    <div className="card_Title">
      {movie && movie.original_title}
    </div>
    <div className="posterImageReleasingDateRating">
        <span><i className="fa-solid fa-calendar-days"></i> {movie && movie.release_date}</span>
      <span><i className="fa-brands fa-imdb"></i> {movie && movie.vote_average.toFixed(1)}</span>
    </div>
  </div>
  )
}

export default Cardoverlay