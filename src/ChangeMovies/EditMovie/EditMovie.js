import React from 'react';
import FormInput from '../FormInput/FormInput';
import Header from '../../App/Header/Header';
import { putMovie } from '../../App/utils/databaseFuncs';

function EditMovie(props) {
  let editingMovie;

  for (let movie of props.movies) {
    if (movie._id === props.editingId) {
      editingMovie = movie;
      break;
    }
  }

  return (
    <div className='EditMovie'>
      <Header message='EDIT A MOVIE' />
      <button class='darkButton' onClick={() => props.setEditing(false)}>
        Back
      </button>
      <table cols='3' width='55%' align='center' cellspacing='20'>
        <FormInput
          name='Title'
          id='editTitle'
          type='text'
          value={editingMovie.title}
          size='40'
        />
        <FormInput
          name='Link to movie trailer'
          id='editTitleLink'
          type='text'
          value={editingMovie.titleLink}
          size='50'
        />
        <FormInput
          name='Link to movie poster'
          id='editTitleImage'
          type='text'
          value={editingMovie.titleImage}
          size='50'
        />
        <FormInput
          name='Release Year'
          id='editYear'
          type='number'
          value={editingMovie.year}
          size='4'
        />
        <FormInput
          name='Director'
          id='editDirector'
          type='text'
          value={editingMovie.director}
          size='35'
        />
        <FormInput
          name='Link to IMDB page'
          id='editImdbLink'
          type='text'
          value={editingMovie.imdbLink}
          size='50'
        />
        <FormInput
          name='IMDB Score'
          id='editImdbScore'
          type='number'
          value={editingMovie.imdbScore}
          size='4'
          step='0.1'
        />
        <FormInput
          name='Subgenre'
          id='editSubgenre'
          type='text'
          value={editingMovie.subgenre}
          size='20'
        />
        <FormInput
          name='Lead Actors (separate by commas, no spaces)'
          id='editActors'
          type='text'
          value={editingMovie.actors.map(actor => actor)}
          size='50'
        />
        <tr align='center'>
          <td align='right' width='48%'>
            Summary:
          </td>
          <td width='4%' />
          <td align='left' width='48%'>
            <textarea
              id='editSummary'
              class='FormInput'
              cols='60'
              rows='6'
              defaultValue={editingMovie.summary}
              required
            />
          </td>
        </tr>
        <FormInput
          name='Runtime'
          id='editRuntime'
          type='number'
          value={editingMovie.runtime}
          size='3'
        />
      </table>
      <br />
      <div align='center'>
        <button
          id='orangeButton'
          onClick={() => {
            putMovie(props.editingId);
            props.setEditing(false);
            props.setmovieChanged(true);
          }}>
          Edit Movie
        </button>
      </div>
    </div>
  );
}

export default EditMovie;
