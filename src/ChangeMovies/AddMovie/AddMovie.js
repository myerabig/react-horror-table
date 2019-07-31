import React from 'react';
import Header from '../../App/Header/Header';
import FormInput from '../FormInput/FormInput';
import { postMovie, imdbPull } from '../../App/utils/databaseFuncs';

function AddMovie(props) {
  return (
    <div className='AddMovie'>
      <Header message='ADD A MOVIE' />
      <button className='darkButton' onClick={() => props.setAdding(false)}>
        Back
      </button>
      <table cols='3' width='55%' align='center' cellspacing='20'>
        <tbody>
          <FormInput name='Title' id='addTitle' type='text' size='40' />
          <FormInput
            name='Link to movie trailer'
            id='addTitleLink'
            type='text'
            size='50'
          />
          <FormInput
            name='Link to movie poster'
            id='addTitleImage'
            type='text'
            size='50'
          />
          <FormInput name='Release Year' id='addYear' type='number' size='2' />
          <FormInput name='Director' id='addDirector' type='text' size='35' />
          <FormInput
            name='Link to IMDB page'
            id='addImdbLink'
            type='text'
            size='50'
          />
          <FormInput
            name='IMDB Score'
            id='addImdbScore'
            type='number'
            size='2'
            step='0.1'
          />
          <FormInput name='Subgenre' id='addSubgenre' type='text' size='20' />
          <FormInput
            name='Lead Actors (separate by commas, no spaces)'
            id='addActors'
            type='text'
            size='50'
          />
          <tr align='center'>
            <td align='right' width='48%'>
              Summary:
            </td>
            <td width='4%' />
            <td align='left' width='48%'>
              <textarea id='addSummary' class='FormInput' cols='60' rows='6' />
            </td>
          </tr>
          <FormInput name='Runtime' id='addRuntime' type='number' size='2' />
        </tbody>
      </table>
      <br />
      <div align='center'>
        <button
          id='orangeButton'
          onClick={() => {
            postMovie();
            props.setAdding(false);
            props.setmovieChanged(true);
          }}>
          Add Movie
        </button>
        <br />
        <br />
        <button className='darkButton' onClick={imdbPull}>
          Use Title and Year to pull from IMDb!
        </button>
      </div>
    </div>
  );
}

export default AddMovie;
