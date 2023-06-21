// import React from 'react'; // cf jsconfig.json

import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';

import moviesArray from './data/movies.json';
import { useState } from 'react';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page refresh
    const newMovie = {
      id: "42",
      title: title,
      year: 2023,
      genres: ["SciFi"],
      rating: rating
    }
    const newMoviesToDisplay = [...moviesToDisplay]
    newMoviesToDisplay.unshift(newMovie)
    setMoviesToDisplay(newMoviesToDisplay)
    // setMoviesToDisplay([newMovie, ...moviesToDisplay]) // directly...
    setTitle("") // to clear the form
  }

  return (
    // Dummy // here auto-import / auto-complete works!
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

      <Header numberOfMovies={moviesToDisplay.length} />

      <ClickHandler />
      <ParentComponent />

      {/* controlled component */}
      <section>
        <form onSubmit={handleSubmit}>
          
        <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="enter the title" 
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </label>

          <label>
            Rating:
            <input 
              type="number" 
              name="rating" 
              placeholder="enter the rating" 
              value={rating} 
              min={1} // or min="1", but min=1 not possible
              max={10} 
              onChange={(e) => {
                let { value, min, max } = e.target;
                value = Math.max(Number(min), Math.min(Number(max), Number(value)))
                setRating(value)
                }}
            />
          </label>

          <button> Create </button>
        </form>
      </section>

      <Main listOfMovies={moviesToDisplay} setCallback={setMoviesToDisplay} />
      {/* 
      better pattern: 
      keep the function to delete a movie where is the state variable containing the movies
      so here
      */}

      <Footer />

      {/* Dummy // no auto-import / auto-complete in JSX... */}
      {/* <Dummy // with auto-import / auto-complete in JSX!!! mind the leading "<" */}

    </div>
  );
}

export default App;
