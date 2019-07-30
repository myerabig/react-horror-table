import React, { useState, useEffect } from 'react';
import { getMovies } from './utils/databaseFuncs';
import '../styles/App.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import MovieChart from '../MovieChart/MovieChart';
import AddMovie from '../ChangeMovies/AddMovie/AddMovie';
import EditMovie from '../ChangeMovies/EditMovie/EditMovie';
import DeleteMovie from '../ChangeMovies/DeleteMovie/DeleteMovie';
import sortMovies from '../MovieChart/utils/sortMovies';
import NavBar from '../NavBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [originalMoviesArray, setOriginalMoviesArray] = useState([]);
  const [loading, setLoading] = useState('initial');
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [searching, setSearching] = useState({
    status: false,
    type: 'all',
    search: ''
  });
  const [movieChanged, setmovieChanged] = useState(true);
  const [editingId, setEditingId] = useState();

  useEffect(() => {
    if (movieChanged === true) {
      setmovieChanged(false);
      setLoading('true');
      setTimeout(() => {
        getMovies().then(data => {
          setLoading('false');
          sortMovies(data, setMovies, 'asc', 'title', 'year');
          setOriginalMoviesArray(data);
        });
      }, 1000);
    }
  }, [movieChanged]);

  if (loading === 'initial') {
    return <h2>Intializing...</h2>;
  }

  if (loading === 'true') {
    return <h2>Loading...</h2>;
  }

  if (adding) {
    return <AddMovie setAdding={setAdding} setmovieChanged={setmovieChanged} />;
  }

  if (editing) {
    return (
      <EditMovie
        movies={movies}
        editingId={editingId}
        setEditing={setEditing}
        setmovieChanged={setmovieChanged}
      />
    );
  }

  if (deleting) {
    return (
      <DeleteMovie
        movies={movies}
        editingId={editingId}
        setDeleting={setDeleting}
        setmovieChanged={setmovieChanged}
      />
    );
  }

  return (
    <div className='App'>
      <Header message='YOUR GUIDE TO THE OBJECTIVELY BEST HORROR MOVIES' />
      <NavBar />
      <SearchBar
        movies={movies}
        setMovies={setMovies}
        originalMoviesArray={originalMoviesArray}
        setSearching={setSearching}
      />
      <MovieChart
        movies={movies}
        setMovies={setMovies}
        setEditing={setEditing}
        setEditingId={setEditingId}
        setDeleting={setDeleting}
        searching={searching}
      />
      <br />
      <div align='center'>
        <button id='orangeButton' onClick={() => setAdding(true)}>
          Add Movie
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
