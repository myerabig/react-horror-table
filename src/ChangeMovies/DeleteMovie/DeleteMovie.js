import React from 'react';
import Header from '../../App/Header/Header';
import { deleteMovie } from '../../App/utils/databaseFuncs';

function DeleteMovie(props) {
  let deletingMovie;

  for (let movie of props.movies) {
    if (movie._id === props.editingId) {
      deletingMovie = movie;
      break;
    }
  }

  return (
    <div className='DeleteMovie'>
      <Header message='DELETE A MOVIE' />
      <button class='darkButton' onClick={() => props.setDeleting(false)}>
        Back
      </button>
      <br />
      <br />
      <table cols='8' width='95%' border='5' align='center' cellPadding='10'>
        <tr>
          <td className='title' width='15%'>
            <a
              href={deletingMovie.titleLink}
              target='_blank'
              rel='noopener noreferrer'>
              {deletingMovie.title}
            </a>
            <img
              src={deletingMovie.titleImage}
              width='200'
              alt={`${deletingMovie.title}`}
            />
          </td>
          <td className='releaseYear' align='center' width='5%'>
            {deletingMovie.year}
          </td>
          <td className='director' width='13%'>
            {deletingMovie.director}
          </td>
          <td align='center' width='5%'>
            <a
              href={deletingMovie.imdbLink}
              target='_blank'
              rel='noopener noreferrer'>
              {deletingMovie.imdbScore}
            </a>
          </td>
          <td width='10%'>{deletingMovie.subgenre}</td>
          <td className='actors' width='12%'>
            {deletingMovie.actors.map(actor => (
              <div>{actor}</div>
            ))}
          </td>
          <td width='35%'>{deletingMovie.summary}</td>
          <td align='center' width='5%'>
            {deletingMovie.runtime}
          </td>
        </tr>
      </table>
      <br />
      <div align='center'>
        <h2>Are you sure you want to delete this movie?</h2>
        <h3>This action cannot be undone.</h3>
        <br />
      </div>
      <table width='20%' align='center' cols='3'>
        <tbody>
          <tr>
            <td width='40%'>
              <button
                id='orangeButton'
                onClick={() => {
                  deleteMovie(props.editingId);
                  props.setDeleting(false);
                  props.setmovieChanged(true);
                }}>
                Yes, Delete
              </button>
            </td>
            <td width='20%' />
            <td width='40%'>
              <button
                class='darkButton'
                onClick={() => props.setDeleting(false)}>
                No, Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeleteMovie;
