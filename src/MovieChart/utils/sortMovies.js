function sortMovies(movies, setMovies, order, property, property2) {
  let _ = require('lodash');

  let sortedMovies = _.orderBy(movies, [property, property2], [order, order]);

  setMovies(sortedMovies);
}

export default sortMovies;
