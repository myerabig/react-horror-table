import React from 'react';
import './App.css';

function Movie(props) {
  return (
    <tr>
      <td class="title"><a href={props.movie.titleLink} target="_blank">{props.movie.title}</a><img
        src={props.movie.titleImage} width="200" /></td>
      <td align="center" class="releaseYear">{props.movie.year}</td>
      <td class="director">{props.movie.director}</td>
      <td align="center"><a href={props.movie.imdbLink} target="_blank">{props.movie.imdbScore}</a></td>
      <td>{props.movie.subgenre}</td>
      <td class="actors">{props.movie.actors.map(actor => <div>{actor}</div>)}</td>
      <td>{props.movie.summary}</td>
      <td align="center">{props.movie.runtime}</td>
    </tr>
  );
}

export default Movie;