// import React from 'react'; // cf jsconfig.json

import "./Main.css";

// const moviesArray = [
//     {
//         "id": 1,
//         "title": "The Godfather",
//         "rating": 9
//     },
//     {
//         "id": 2,
//         "title": "Forrest Gump",
//         "rating": 9
//     },
//     {
//         "id": 3,
//         "title": "Gladiator",
//         "rating": 8
//     },
// ];

import moviesArray from '../data/movies.json';
import { useState } from 'react';

export const Main = () => {

    const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);

    const deleteMovie = (movieId) => {
        setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))
    }

    return (
        <div className="Main">
            <p>Main component</p>

            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map(movie => {
                return (
                    <div key={movie.id} className="card">
                        <p>{movie.title}</p>
                        <button onClick={() => deleteMovie(movie.id)}> Delete </button>
                    </div>
                )
            })}
        </div>
    )
}

// <div id="id1" class="class1" hidden>
// document.getElementById("id1").hidden = true;
// <div id="id1" class="class1">
// document.getElementById("id1").hidden = false;