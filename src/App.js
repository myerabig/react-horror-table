import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieChart from './MovieChart';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

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
      actors: getActors('addActors'),
      summary: getData('addSummary'),
      runtime: getData('addRuntime')
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
}

function putMovie(objectId) {
  var request = require("request");

  var options = {
    method: 'PUT',
    url: `https://movies-4461.restdb.io/rest/movies/${objectId}`,
    headers:
    {
      'cache-control': 'no-cache',
      'x-apikey': '79e9ea634e18ec60517fd90c569e2c37305f6',
      'content-type': 'application/json'
    },
    body: {
      title: getData('editTitle'),
      titleLink: getData('editTitleLink'),
      titleImage: getData('editTitleImage'),
      year: getData('editYear'),
      director: getData('editDirector'),
      imdbLink: getData('editImdbLink'),
      imdbScore: getData('editImdbScore'),
      subgenre: getData('editSubgenre'),
      actors: getActors('editActors'),
      summary: getData('editSummary'),
      runtime: getData('editRuntime')
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
}

function deleteMovie(objectId) {
  var request = require("request");

  var options = {
    method: 'DELETE',
    url: `https://movies-4461.restdb.io/rest/movies/${objectId}`,
    headers:
    {
      'cache-control': 'no-cache',
      'x-apikey': '79e9ea634e18ec60517fd90c569e2c37305f6',
      'content-type': 'application/json'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
}

function getData(id) {
  return document.getElementById(id).value;
}

function getActors(id) {
  let actorString = document.getElementById(id).value;
  return actorString.split(",");
}

function App() {
  const [movies, setMovies] = useState([]);
  const [originalMoviesArray, setOriginalMoviesArray] = useState([]);
  const [loading, setLoading] = useState('initial');
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [movieChanged, setmovieChanged] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [editingId, setEditingId] = useState();

  useEffect(() => {
    if (movieChanged === true) {
      setmovieChanged(false);
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

  if (adding) {
    return (
      <div className="App">
        <Header message="ADD A MOVIE" />
        <button class="searchOption" onClick={() => setAdding(false)}>Back</button>
        <AddMovie />
        <div align="center">
          <button id="orangeButton" onClick={() => {
            postMovie();
            setAdding(false);
            setmovieChanged(true);
          }}>Add Movie</button>
        </div>
      </div>
    );
  }

  if (editing) {
    let editingMovie;

    for (let movie of movies) {
      if (movie._id === editingId) {
        editingMovie = movie;
        break;
      }
    }

    return (
      <div className="App">
        <Header message="EDIT A MOVIE" />
        <button class="searchOption" onClick={() => setEditing(false)}>Back</button>
        <EditMovie movie={editingMovie} />
        <div align="center">
          <button id="orangeButton" onClick={() => {
            putMovie(editingId);
            setEditing(false);
            setmovieChanged(true);
          }}>Edit Movie</button>
        </div>
      </div>
    )
  }

  if (deleting) {
    let deletingMovie;

    for (let movie of movies) {
      if (movie._id === editingId) {
        deletingMovie = movie;
        break;
      }
    }

    return (
      <div className="App">
        <Header message="DELETE A MOVIE" />
        <button class="searchOption" onClick={() => setDeleting(false)}>Back</button>
        <br />
        <DeleteMovie movie={deletingMovie} />
        <div align="center">
          <button id="orangeButton" onClick={() => {
            deleteMovie(editingId);
            setDeleting(false);
            setmovieChanged(true);
          }}>Yes, Delete</button>
          <button class="searchOption" onClick={() => setDeleting(false)}>No, Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header message="YOUR GUIDE TO THE OBJECTIVELY BEST HORROR MOVIES" />
      <SearchBar setMovies={setMovies} originalMoviesArray={originalMoviesArray} />
      <MovieChart movies={movies} setEditing={setEditing} setEditingId={setEditingId} setDeleting={setDeleting} />
      <br />
      <div align="center">
        <button id="orangeButton" onClick={() => setAdding(true)}>Add Movie</button>
      </div>
    </div>
  );
}

export default App;
