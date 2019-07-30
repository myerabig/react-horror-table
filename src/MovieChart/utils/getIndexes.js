function getIndexes(search, searchType, movie) {
  let indexes = [];

  if (searchType === 'all') {
    // let title = movie.title.toLowerCase();
    // let year = movie.year;
    // let director = movie.director.toLowerCase();
  } else if (searchType === 'title') {
    let title = movie.title.toLowerCase();
    indexes.push(title.indexOf(search));

    while (title.indexOf(search, indexes[indexes.length - 1] + 1) !== -1) {
      indexes.push(title.indexOf(search, indexes[indexes.length - 1] + 1));
    }
  } else if (searchType === 'year') {
    let year = movie.year;
    indexes.push(year.indexOf(search));

    while (year.indexOf(search, indexes[indexes.length - 1] + 1) !== -1) {
      indexes.push(year.indexOf(search, indexes[indexes.length - 1] + 1));
    }
  } else if (searchType === 'director') {
    let director = movie.director.toLowerCase();
    indexes.push(director.indexOf(search));

    while (director.indexOf(search, indexes[indexes.length - 1] + 1) !== -1) {
      indexes.push(director.indexOf(search, indexes[indexes.length - 1] + 1));
    }
  } else if (searchType === 'actor') {
    indexes = {};
    let actors = movie.actors.map(actor => actor.toLowerCase());

    actors.forEach(actor => {
      indexes[actor] = [];

      if (actor.indexOf(search) !== -1) {
        indexes[actor].push(actor.indexOf(search));
        while (
          actor.indexOf(
            search,
            indexes[actor][indexes[actor].length - 1] + 1
          ) !== -1
        ) {
          indexes[actor].push(
            actor.indexOf(search, indexes[actor][indexes[actor].length - 1] + 1)
          );
        }
      }
    });
  }

  return indexes;
}

export { getIndexes };
