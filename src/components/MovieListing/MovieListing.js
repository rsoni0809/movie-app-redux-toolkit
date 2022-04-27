import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from "../../features/movies/movieSlice"
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";

const MovieListing = () => {
    const moviesList = useSelector(getAllMovies);
    console.log(moviesList);
    let renderMovies = moviesList.Response !== "True" ? (
        <div className="movies-error">
            <h3>
                {moviesList.Error}
            </h3>
        </div>
    ) : (
            moviesList.Search.map((movie, index) => (
                 <MovieCard key={index} movie={movie} />
            ))
    );
  return (
      <div className="movies-wrapper">
          <div className="movies-list">
              <h2>Movies</h2>
              <div className="movies-container">
                  {renderMovies}
              </div>
          </div>
    </div>
  )
}

export default MovieListing;