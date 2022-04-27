import React from 'react';
import "./MovieCard.scss";

const MovieCard = ({ movie}) => {
  return (
      <div className="card-item">
          <div className="card-inner">
              <div className="card-top">
                  <img src={movie.Poster} alt={ movie.Title} />
              </div>
              <div className="card-bottom">
                  <h4>
                      {movie.Title}
                  </h4>
                  <p>{movie.Year}</p>
              </div>
          </div>
    </div>
  )
}

export default MovieCard