import React from 'react';
import FormInput from './FormInput';

function AddMovie() {
  return (
    <div className="AddMovie">
      <table cols="3" width="45%" align="center" cellspacing="20">
        <FormInput name="Title" id="editTitle" type="text" size="40" />
        <FormInput name="Link to movie trailer" id="editTitleLink" type="text" size="50" />
        <FormInput name="Link to movie poster" id="editTitleImage" type="text" size="50" />
        <FormInput name="Release Year" id="editYear" type="number" size="2" />
        <FormInput name="Director" id="editDirector" type="text" size="35" />
        <FormInput name="Link to IMDB page" id="editImdbLink" type="text" size="50" />
        <FormInput name="IMDB Score" id="editImdbScore" type="number" size="2" step="0.1" />
        <FormInput name="Subgenre" id="editSubgenre" type="text" size="20" />
        <FormInput name="Lead Actors (separate by commas, no spaces)" id="editActors" type="text" size="50" />
        <FormInput name="Summary" id="editSummary" type="text" size="60" />
        <FormInput name="Runtime" id="editRuntime" type="number" size="2" />
      </table>
      <br />
    </div>
  )
}

export default AddMovie;