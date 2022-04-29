import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_OPT_KEY } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const movieText = 'Harry Potter';
    const response = await movieApi.get(`?i=${API_OPT_KEY}&apiKey=${API_KEY}&s=${movieText}&type=movie`)
    console.log("Response", response);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async () => {
    const showText = "america";
    const response = await movieApi.get(`?i=${API_OPT_KEY}&apiKey=${API_KEY}&s=${showText}&type=series`);
    console.log("Response shows", response.data);
    return response.data;
});

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowsDetail", async (id) => {
    const response = await movieApi.get(`?i=${id}&apiKey=${API_KEY}&Plot=full`);
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    moviesOrShowsDetail : {}
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMoviesOrShow: (state) => {
            state.moviesOrShowsDetail = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload}) => {
            console.log("Fetched successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: (state, { payload}) => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("show fulfilled");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, { payload }) => {
            console.log("Details");
            return {...state, moviesOrShowsDetail: payload }
        }
       
    },

});

export const { removeSelectedMoviesOrShow } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviesShows = (state) => state.movies.moviesOrShowsDetail;
export default moviesSlice.reducer;