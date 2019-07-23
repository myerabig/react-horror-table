import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieChart from './MovieChart';
import AddMovie from './AddMovie';

async function getMovies() {
  const response = await fetch("https://movies-4461.restdb.io/rest/movies", {
    cache: 'no-cache',
    headers:
    {
      'x-apikey': '5d25df9d1e3c8507f2caa276'
    }
  });
  const json = await response.json();
  return json;
}

function postMovie() {
  const request = require("request");

  let options = {
    method: 'POST',
    url: 'https://movies-4461.restdb.io/rest/movies',
    headers:
    {
      'cache-control': 'no-cache',
      'x-apikey': '79e9ea634e18ec60517fd90c569e2c37305f6',
      'content-type': 'application/json'
    },
    body: {
      title: getData('addTitle'),
      titleLink: getData('addTitleLink'),
      titleImage: getData('addTitleImage'),
      year: getData('addYear'),
      director: getData('addDirector'),
      imdbLink: getData('addImdbLink'),
      imdbScore: getData('addImdbScore'),
      subgenre: getData('addSubgenre'),
      actors: getActors(),
      summary: getData('addSummary'),
      runtime: getData('addRuntime')
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
}

function getData(id) {
  return document.getElementById(id).value;
}

function getActors() {
  let actorString = document.getElementById('addActors').value;
  return actorString.split(",");
}

function App() {
  const [loading, setLoading] = useState('initial');
  const [movies, setMovies] = useState([]);
  const [adding, setAdding] = useState(false);
  const [movieAdded, setMovieAdded] = useState(true);
  const [originalMoviesArray, setOriginalMoviesArray] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (movieAdded == true) {
      setMovieAdded(false);
      setLoading('true');
      setTimeout(() => {
        getMovies()
          .then((data) => {
            setLoading('false');
            setMovies(data);
            if (!initialized) {
              setOriginalMoviesArray(data);
              setInitialized(true);
            }
          });
      }, 1000);
    }
  });

  if (loading === 'initial') {
    return <h2>Intializing...</h2>;
  }

  if (loading === 'true') {
    return <h2>Loading...</h2>;
  }

  if (adding === true) {
    return (
      <div className="App">
        <AddMovie />
        <div align="center">
          <button id="addMovieButton" onClick={() => {
            postMovie();
            setAdding(false);
            setMovieAdded(true);
          }}>Add Movie</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header message="YOUR GUIDE TO THE OBJECTIVELY BEST HORROR MOVIES" />
      <SearchBar setMovies={setMovies} originalMoviesArray={originalMoviesArray} />
      <MovieChart movies={movies} />
      <br />
      <div align="center">
        <button id="addMovieButton" onClick={() => setAdding(true)}>Add Movie</button>
      </div>
    </div>
  );
}

export default App;
