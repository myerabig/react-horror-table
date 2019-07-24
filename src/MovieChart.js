import React from 'react';
import ChartHeader from './ChartHeader';
import Movie from './Movie';

function MovieChart(props) {
  return (
    <div classname="MovieChart">
      <table cols="9" width="95%" border="5" align="center" cellpadding="10">
        <ChartHeader />
        {props.movies.map(movie =>
          <Movie movie={movie} setEditing={props.setEditing} setEditingId={props.setEditingId} setDeleting={props.setDeleting} />)}
      </table>
    </div >
  );
}

export default MovieChart;
