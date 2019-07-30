function getData(id) {
  return document.getElementById(id).value;
}

function getActors(id) {
  let actorString = document.getElementById(id).value;
  return actorString.split(",");
}

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

export { getMovies, postMovie, putMovie, deleteMovie };