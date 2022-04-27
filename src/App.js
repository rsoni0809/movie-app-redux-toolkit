import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from './components/Error/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';


import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path = "*" element={ <PageNotFound />} />
        </Routes>
         <Footer />
      </Router>
     
    </div>
  );
}

export default App;
