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
import Movie from './Movie';

export const Main = () => {

    const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);

    const deleteMovie = (movieId) => {
        setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))
    }

    // conditional rendering: solution 1 (using an Element variable)
    let messageNumberMovies = "";
    if(moviesToDisplay.length > 0){
        messageNumberMovies = <h1>Number of movies: {moviesToDisplay.length}</h1>;
    } else {
        messageNumberMovies = <h1>No movie to display</h1>;
    }

    return (
        <div className="Main">
            <p>Main component</p>

            {messageNumberMovies}

            {
            // TO DO: make a JSX comment block snippet
            // {moviesToDisplay.map(movie => {
            //    return (
            //        <div key={movie.id} className="card">
            //            <p>{movie.title}</p>
            //            <p>Rating: {movie.rating}/10</p>
            //            {/* {if(movie.rating>8){}} */}
            //            {/* if-else statements does not translate in JSX, cannot be used directly in the markup */}
            //            { movie.rating > 8 && <p>YOU MUST SEE THIS MOVIE!!!</p>}
            //            {/* 
            //            trick using the logical AND && operator:
            //            it returns the value of the first falsy operand encountered when evaluating from left to right, 
            //            or the value of the last operand if they are all truthy.
            //            */}
            //            {false} {/* renders nothing */}
            //            {/* { movie.imgURL ? <img src={movie.imgURL} /> : <p>No img to display</p>} */}
            //            { movie.imgURL 
            //                ? <img src={movie.imgURL} /> 
            //                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            //            }
            //            <br />
            //            <button onClick={() => deleteMovie(movie.id)}> Delete </button>
            //        </div>
            //    )
            //})}
            }

            {moviesToDisplay.map((movieObj) => {
                return <Movie key={movieObj.id} movieDetails={movieObj} deleteCallback={deleteMovie} />
                // var component = <Component />;
                // component.props.foo = x // bad
                // return component;
                // return <Movie {...movieObj} foo={'override'} /> // using JSX spread attributes (component must be designed to receive it, not the case right now...)
            })}

        </div>
    )
}

// <div id="id1" class="class1" hidden>
// document.getElementById("id1").hidden = true;
// <div id="id1" class="class1">
// document.getElementById("id1").hidden = false;