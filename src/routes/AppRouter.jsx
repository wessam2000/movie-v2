import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoviePage from "../pages/Movies/MoviePage";
import ActorsPage from "../pages/Actors/ActorsPage";
import SeriessPage from "../pages/Series/SeriesPage";
import TvShowsPage from "../pages/TVShows/TvShowsPage";
import MovieDetails from "../pages/Movies/MovieDetails";
import ActorDetails from "../pages/Actors/ActorDetails";
import TvShowDetails from "../pages/TVShows/TvShowDetails";
import SerieDetails from "../pages/Series/SerieDetails";






const AppRouter = () => {
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MoviePage/>}/>
                <Route path="/TvShow" element={<TvShowsPage/>}/>
                <Route path="/Actors" element={<ActorsPage/>}/>
                <Route path="/Series" element={<SeriessPage/>}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
                <Route path="/actor/:id" element={<ActorDetails/>}/>
                <Route path="/serie/:id" element={<SerieDetails/>}/>
                <Route path="/TvShow/:id" element={<TvShowDetails/>}/>
            </Routes>
        </Router>
    )
};
export default AppRouter