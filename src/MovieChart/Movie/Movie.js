import React from 'react';
import '../../styles/App.css';
import HighlightedResults from '../HighlightedResults/HighlightedResults';
var _ = require('lodash');

function Movie(props) {
  return (
    <tr>
      <td className='title'>
        <a
          href={props.movie.titleLink}
          target='_blank'
          rel='noopener noreferrer'>
          {props.searching.status === true &&
          (props.searching.type === 'title' ||
            props.searching.type === 'all') ? (
            <HighlightedResults
              item={props.movie.title}
              searching={props.searching}
              movie={props.movie}
            />
          ) : (
            props.movie.title
          )}
        </a>
        <img
          src={props.movie.titleImage}
          width='200'
          alt={`${props.movie.title}`}
        />
      </td>
      <td align='center' className='releaseYear'>
        {props.searching.status === true &&
        (props.searching.type === 'year' || props.searching.type === 'all') ? (
          <HighlightedResults
            item={props.movie.year}
            searching={props.searching}
            movie={props.movie}
          />
        ) : (
          props.movie.year
        )}
      </td>
      <td className='director'>
        {props.searching.status === true &&
        (props.searching.type === 'director' ||
          props.searching.type === 'all') ? (
          <HighlightedResults
            item={props.movie.director}
            searching={props.searching}
            movie={props.movie}
          />
        ) : (
          props.movie.director
        )}
      </td>
      <td align='center'>
        <a
          href={props.movie.imdbLink}
          target='_blank'
          rel='noopener noreferrer'>
          {props.movie.imdbScore}
        </a>
      </td>
      <td>{props.movie.subgenre}</td>
      <td className='actors'>
        {props.searching.status === true &&
        (props.searching.type === 'actor' || props.searching.type === 'all') ? (
          <HighlightedResults
            item={props.movie.actors}
            searching={props.searching}
            movie={props.movie}
          />
        ) : (
          props.movie.actors.map(actor => (
            <div key={`${actor}${props.movie.year}`}>{_.trim(actor)}</div>
          ))
        )}
      </td>
      <td>{props.movie.summary}</td>
      <td align='center'>{props.movie.runtime}</td>
      <td>
        <img
          className='icon'
          src={require('../../assets/edit.png')}
          width='30'
          alt='Edit'
          onClick={() => {
            props.setEditing(true);
            props.setEditingId(props.movie._id);
          }}
        />
        <img
          className='icon'
          src={require('../../assets/delete.png')}
          width='30'
          alt='Delete'
          onClick={() => {
            props.setDeleting(true);
            props.setEditingId(props.movie._id);
          }}
        />
      </td>
    </tr>
  );
}

export default Movie;
