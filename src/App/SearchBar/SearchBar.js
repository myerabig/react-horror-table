import React from 'react';
import { handleSearchClick } from '../utils/searchFuncs';
import sortMovies from '../../MovieChart/utils/sortMovies';

let searchType = 'all';
let placeholderText = 'Search by ' + searchType;

function SearchBar(props) {
  let movies = [];
  let search = '';
  let searchIndex;

  function searchMovies() {
    let newMovies = [...props.originalMoviesArray];
    movies = [];
    search = document.getElementById('searchBar').value.toLowerCase();
    props.setMovies({});
    props.setSearching({ status: true, type: searchType, search: search });

    if (search === '') {
      props.setSearching({ status: false, search: '' });
      movies = [...props.originalMoviesArray];
    } else if (searchType === 'title') {
      newMovies.forEach(movie => {
        searchIndex = movie.title.toLowerCase().indexOf(search);
        if (searchIndex !== -1) {
          movies.push(movie);
        }
      });
    } else if (searchType === 'year') {
      props.originalMoviesArray.forEach(movie => {
        if (movie.year.indexOf(search) !== -1) {
          movies.push(movie);
        }
      });
    } else if (searchType === 'director') {
      props.originalMoviesArray.forEach(movie => {
        if (movie.director.toLowerCase().indexOf(search) !== -1) {
          movies.push(movie);
        }
      });
    } else if (searchType === 'actor') {
      for (let movie of props.originalMoviesArray) {
        for (let actor of movie.actors) {
          if (actor.toLowerCase().indexOf(search) !== -1) {
            movies.push(movie);
            break;
          }
        }
      }
    } else {
      newMovies.forEach(movie => {
        movie.string = JSON.stringify(movie);
      });
      newMovies.forEach(movie => {
        if (movie.string.toLowerCase().indexOf(search) !== -1) {
          delete movie.string;
          movies.push(movie);
        }
      });
    }
    sortMovies(movies, props.setMovies, 'asc', 'title', 'year');
  }

  return (
    <div className='SearchBar' align='center'>
      <input
        id='searchBar'
        className='searchbar'
        type='text'
        placeholder={placeholderText}
        onChange={searchMovies}
      />
      <table cols='4' cellSpacing='20'>
        <tbody>
          <tr>
            <td>
              <button
                id='title'
                className='searchOption darkButton'
                onClick={() => {
                  searchType = handleSearchClick('title', searchType);
                }}>
                Title
              </button>
            </td>
            <td>
              <button
                id='year'
                className='searchOption darkButton'
                onClick={() => {
                  searchType = handleSearchClick('year', searchType);
                }}>
                Year
              </button>
            </td>
            <td>
              <button
                id='director'
                className='searchOption darkButton'
                onClick={() => {
                  searchType = handleSearchClick('director', searchType);
                }}>
                Director
              </button>
            </td>
            <td>
              <button
                id='actor'
                className='searchOption darkButton'
                onClick={() => {
                  searchType = handleSearchClick('actor', searchType);
                }}>
                Actor
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
