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
import AddMovie from './components/AddMovie';
// note: 
// JavaScript bundler (e.g. webpack) ensures that the code is bundled efficiently
// during the bundling process, the bundler analyzes your code and creates a dependency graph
// it detects shared dependencies among multiple components and performs optimizations to avoid duplicating the code
// shared dependencies are extracted in separate chunks or modules, then loaded once and reused by the components that depend on them
// this way, the size of the project is not significantly affected by importing the same module multiple times

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);
  // const [title, setTitle] = useState("");
  // const [rating, setRating] = useState("");
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page refresh
    const newMovie = {
      id: "42",
      // title: title,
      title: inputs.title,
      year: 2023,
      genres: ["SciFi"],
      // rating: rating
      rating: inputs.rating
    }
    const newMoviesToDisplay = [...moviesToDisplay]
    newMoviesToDisplay.unshift(newMovie)
    setMoviesToDisplay(newMoviesToDisplay)
    // setMoviesToDisplay([newMovie, ...moviesToDisplay]) // or directly...
    // setTitle("") // to clear the form
    setInputs({...inputs, title: "", rating: ""})
  }

  const handleChange = (e) => {
    let { name, value, min, max } = e.target;
    if (name === 'rating') value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    // setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    setInputs(prevState => ({ ...prevState, [e.target.name]: value }));
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

      <AddMovie />

      {/* controlled component */}
      <section>
        <form onSubmit={handleSubmit}>
          
        <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="title?" 
              // value={title}
              // onChange={(e) => {setTitle(e.target.value)}}
              value={inputs.title || ""}
              onChange={(e) => {handleChange(e)}}
              
            />
          </label>

          <label>
            Rating:
            <input 
              type="number" 
              name="rating" 
              placeholder="rating?" 
              // value={rating} 
              value={inputs.rating || ""} 
              min={1} // or min="1", but min=1 not possible
              max={10} 
              // onChange={(e) => {
              //   let { value, min, max } = e.target;
              //   value = Math.max(Number(min), Math.min(Number(max), Number(value)))
              //   setRating(value)
              //   }}
              onChange={(e) => {handleChange(e)}}
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
