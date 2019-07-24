import React from 'react';
import FormInput from './FormInput';

function EditMovie(props) {
  return (
    <div className="EditMovie">
      <table cols="3" width="45%" align="center" cellspacing="20">
        <FormInput name="Title" id="editTitle" type="text" value={props.movie.title} size="40" />
        <FormInput name="Link to movie trailer" id="editTitleLink" type="text" value={props.movie.titleLink} size="50" />
        <FormInput name="Link to movie poster" id="editTitleImage" type="text" value={props.movie.titleImage} size="50" />
        <FormInput name="Release Year" id="editYear" type="number" value={props.movie.year} size="4" />
        <FormInput name="Director" id="editDirector" type="text" value={props.movie.director} size="35" />
        <FormInput name="Link to IMDB page" id="editImdbLink" type="text" value={props.movie.imdbLink} size="50" />
        <FormInput name="IMDB Score" id="editImdbScore" type="number" value={props.movie.imdbScore} size="4" step="0.1" />
        <FormInput name="Subgenre" id="editSubgenre" type="text" value={props.movie.subgenre} size="20" />
        <FormInput name="Lead Actors (separate by commas, no spaces)" id="editActors" type="text" value={props.movie.actors.map(actor => actor + ",")} size="50" />
        <FormInput name="Summary" id="editSummary" type="text" value={props.movie.summary} size="60" />
        <FormInput name="Runtime" id="editRuntime" type="number" value={props.movie.runtime} size="3" />
      </table>
      <br />
    </div>
  )
}

export default EditMovie;