import React from 'react';

function SearchBar(props) {
  let searchType = "title";
  let placeholderText = "Search by " + searchType;

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
    if (searchType == "title") {
      console.log("searched titles");
    }
    else if (searchType == "year") {
      console.log("searched years");
    }
    else if (searchType == "director") {
      console.log("searched directors");
    }
    else if (searchType == "actor") {
      console.log("searched actors");
    }
  }

  function titleSearch() {
    var movies = "";
    var search = document.getElementById("titleSearchbar").value;
    var titleName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
      titleName = document.getElementsByClassName("row")[i].getElementsByClassName("title")[0].getElementsByTagName("a")[0].innerHTML;

      if (titleName.indexOf(search) != -1) {
        movies += document.getElementsByClassName("row")[i].outerHTML;
      }
    }

    if (document.getElementById("titleSearchbar").value == "") {
      document.getElementById("movieChart").style = "display: block";
      document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
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
