import React, { useEffect } from 'react';
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { API_KEY, API_OPT_KEY} from '../../common/apis/movieApiKey';
import MovieListing from '../MovieListing/MovieListing'
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const movieText = 'mission';
        const fetchMovies = async () => {
            const response = await movieApi.get(`?i=${API_OPT_KEY}&apiKey=${API_KEY}&s=${movieText}&type=series`).catch((err) => {
                console.log("Err:", err);
            })
            console.log("Response", response);
            dispatch(addMovies(response.data));
        }
       
        fetchMovies();
    }, []);
  return (
      <div>
          <div className="banner-img">
              <MovieListing />
          </div>
    </div>
  )
}

export default Home