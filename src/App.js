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
