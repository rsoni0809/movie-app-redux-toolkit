import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MovieListing from '../MovieListing/MovieListing'
import { fetchAsyncMovies, fetchAsyncShows, fetchAsyncEpisodes } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);
  return (
      <div>
          <div className="banner-img">
              <MovieListing />
          </div>
    </div>
  )
}

export default Home