import React from 'react';
import ChartHeader from './ChartHeader/ChartHeader';
import Movie from './Movie/Movie';

function MovieChart(props) {
  return (
    <div className='MovieChart'>
      <table cols='9' width='95%' border='5' align='center' cellPadding='10'>
        <tbody>
          <ChartHeader movies={props.movies} setMovies={props.setMovies} />
          {props.movies.map(movie => (
            <Movie
              key={`${movie.title}${movie.year}`}
              movie={movie}
              setEditing={props.setEditing}
              setEditingId={props.setEditingId}
              setDeleting={props.setDeleting}
              searching={props.searching}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieChart;
