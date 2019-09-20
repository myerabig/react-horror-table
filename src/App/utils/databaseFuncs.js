var _ = require('lodash');

function getData(id) {
  return document.getElementById(id).value;
}

function getActors(id) {
  let actorString = document.getElementById(id).value;
  return actorString.split(',');
}

async function getMovies() {
  const response = await fetch('https://movies-4461.restdb.io/rest/movies', {
    cache: 'no-cache',
    headers: {
      'x-apikey': '5d25df9d1e3c8507f2caa276'
    }
  });
  const json = await response.json();
  return json;
}

async function imdbPull() {
  const title = document.getElementById('addTitle').value;
  let year = document.getElementById('addYear').value;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=36640720&t=${title}&y=${year}&plot=full`,
    {
      cache: 'no-cache'
    }
  );
  const json = await response.json();
  console.log(json);

  let actors = json['Actors'].split(',');
  actors.forEach(actor => {
    _.trim(actor);
  });
  let genre = json['Genre'].split(',');
  if (genre[0] === 'Horror') {
    genre = _.trim(genre[1]);
  } else {
    genre = _.trim(genre[0]);
  }
  let imdbRating = parseFloat(json['imdbRating']);
  const runtime = json['Runtime'].split(' ')[0];
  const imdbLink = `https://www.imdb.com/title/${json['imdbID']}/`;
  year = parseInt(json['Year']);

  document.getElementById('addTitle').value = json['Title'];
  document.getElementById('addTitleImage').value = json['Poster'];
  document.getElementById('addYear').value = year;
  document.getElementById('addDirector').value = json['Director'];
  document.getElementById('addImdbLink').value = imdbLink;
  document.getElementById('addImdbScore').value = imdbRating;
  document.getElementById('addSubgenre').value = genre;
  document.getElementById('addActors').value = actors;
  document.getElementById('addSummary').value = json['Plot'];
  document.getElementById('addRuntime').value = runtime;
}

function postMovie() {
  const request = require('request');

  let options = {
    method: 'POST',
    url: 'https://movies-4461.restdb.io/rest/movies',
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '',
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

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
  });
}

function putMovie(objectId) {
  var request = require('request');

  var options = {
    method: 'PUT',
    url: `https://movies-4461.restdb.io/rest/movies/${objectId}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '',
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

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
  });
}

function deleteMovie(objectId) {
  var request = require('request');

  var options = {
    method: 'DELETE',
    url: `https://movies-4461.restdb.io/rest/movies/${objectId}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '',
      'content-type': 'application/json'
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
  });
}

export { getMovies, postMovie, putMovie, deleteMovie, imdbPull };
