import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload //Immutability state take all instance first then take payload 
        }
    },
    extraReducers: {},

});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;