import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieChart from './MovieChart';

const originalMoviesArray = [{
  title: "Halloween",
  titleLink: "https://www.youtube.com/watch?v=xHuOtLTQ_1I",
  titleImage: require("./assets/halloween1978.jpg"),
  year: 1978,
  director: "John Carpenter",
  imdbLink: "https://www.imdb.com/title/tt0077651/",
  imdbScore: 7.8,
  subgenre: "Slasher",
  actors: ["Jamie Lee Curtis", "Nick Castle"],
  summary: "On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith.He was sentenced and locked away for 15 years.But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims.",
  runtime: 91
},
{
  title: "Halloween",
  titleLink: "https://www.youtube.com/watch?v=ek1ePFp-nBI",
  titleImage: require("./assets/halloween2018.jpg"),
  year: 2018,
  director: "David Gordon Green",
  imdbLink: "https://www.imdb.com/title/tt1502407/",
  imdbScore: 6.7,
  subgenre: "Slasher",
  actors: ["Jamie Lee Curtis", "Nick Castle"],
  summary: "It's been 40 years since Laurie Strode survived a vicious attack from crazed killer Michael Myers on Halloween night. Locked up in an institution Myers manages to escape when his bus transfer goes horribly wrong. Laurie now faces a terrifying showdown when the masked madman returns to Haddonfield, Ill. -- but this time, she's ready for him.",
  runtime: 104
}];

const useAppState = () => {
  const [movies, setMovies] = useState(originalMoviesArray);

  return { movies, setMovies };
}

function App() {
  const {
    movies,
    setMovies
  } = useAppState();

  return (
    <div className="App">
      <Header />
      <SearchBar setMovies={setMovies} movies={movies} originalMoviesArray={originalMoviesArray} />
      <MovieChart movies={movies} />
    </div>
  );
}

export default App;
