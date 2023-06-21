// import React from 'react'; // cf jsconfig.json

import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';

function App() {
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

      <Header />

      <ClickHandler />
      <ParentComponent />

      <Main />

      <Footer />

      {/* Dummy // no auto-import / auto-complete in JSX... */}
      {/* <Dummy // with auto-import / auto-complete in JSX!!! mind the leading "<" */}

    </div>
  );
}

export default App;
