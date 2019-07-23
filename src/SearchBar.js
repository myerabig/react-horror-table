import React from 'react';

let searchType = "title";
let placeholderText = "Search by " + searchType;

function SearchBar(props) {
  let movies = [];
  let search = "";

  function handleSearchClick(id) {
    searchType = id;
    clearSearchClasses();
    document.getElementById(id).classList.add("clickedSearchOption");
    document.getElementById("searchBar").placeholder = "Search by " + searchType;
  }

  function clearSearchClasses() {
    const elems = document.getElementsByClassName("searchOption");

    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("clickedSearchOption");
    }
  }

  function searchMovies() {
    movies = [];
    search = document.getElementById("searchBar").value.toLowerCase();
    props.setMovies({});

    if (search === "") {
      props.setMovies(props.originalMoviesArray);
    }
    else if (searchType === "title") {
      for (let movie of props.originalMoviesArray) {
        if (movie.title.toLowerCase().indexOf(search) !== -1) {
          movies.push(movie);
        }
      }
      props.setMovies(movies);
    }
    else if (searchType === "year") {
      for (let movie of props.originalMoviesArray) {
        if (movie.year.indexOf(search) !== -1) {
          movies.push(movie);
        }
      }
      props.setMovies(movies);
    }
    else if (searchType === "director") {
      for (let movie of props.originalMoviesArray) {
        if (movie.director.toLowerCase().indexOf(search) !== -1) {
          movies.push(movie);
        }
      }
      props.setMovies(movies);
    }
    else if (searchType === "actor") {
      for (let movie of props.originalMoviesArray) {
        for (let actor of movie.actors) {
          if (actor.toLowerCase().indexOf(search) !== -1) {
            movies.push(movie);
            break;
          }
        }
      }
      props.setMovies(movies);
    }
  }

  return (
    <div className="SearchBar" align="center">
      <input id="searchBar" class="searchbar" type="text" placeholder={placeholderText} onChange={searchMovies} />
      <table cols="4" cellSpacing="20">
        <tr>
          <td><button id="title" className="searchOption" onClick={() => handleSearchClick("title")}>Title</button></td>
          <td><button id="year" className="searchOption" onClick={() => handleSearchClick("year")}>Year</button></td>
          <td><button id="director" className="searchOption" onClick={() => handleSearchClick("director")}>Director</button></td>
          <td><button id="actor" className="searchOption" onClick={() => handleSearchClick("actor")}>Actor</button></td>
        </tr>
      </table>
    </div >
  );
}

export default SearchBar;
