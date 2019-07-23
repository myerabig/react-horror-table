import React from 'react';
import Header from './Header';

function AddMovie() {
  function formInput(name, id) {
    return (
      <tr align="center">
        <td align="right" width="48%">
          {name}:
        </td>
        <td width="4%"></td>
        <td align="left" width="48%">
          <input id={id} type="text" />
        </td>
      </tr>
    )
  }

  return (
    <div className="AddMovie">
      <Header message="ADD A MOVIE" />
      <button class="searchOption">Back</button>
      <table cols="3" width="45%" align="center" cellspacing="20">
        {formInput("Title", "addTitle")}
        {formInput("Link to movie trailer", "addTitleLink")}
        {formInput("Link to movie poster", "addTitleImage")}
        {formInput("Release Year", "addYear")}
        {formInput("Director", "addDirector")}
        {formInput("Link to IMDB page", "addImdbLink")}
        {formInput("IMDB Score", "addImdbScore")}
        {formInput("Subgenre", "addSubgenre")}
        {formInput("Lead Actors (separate by commas, no spaces)", "addActors")}
        {formInput("Summary", "addSummary")}
        {formInput("Runtime", "addRuntime")}
      </table>
      <br />
    </div>
  )
}

export default AddMovie;