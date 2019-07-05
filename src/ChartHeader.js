import React from 'react';

function ChartHeader() {
  return (
    <tr>
      <th width="14%">Title</th>
      <th width="3%">Release Year</th>
      <th width="10%">Director</th>
      <th width="2%">IMDB Rating/10</th>
      <th width="10%">Subgenre</th>
      <th width="15%">Lead Actor(s)</th>
      <th width="44%">Plot Summary</th>
      <th width="2%">Runtime (minutes)</th>
    </tr>
  );
}

export default ChartHeader;
