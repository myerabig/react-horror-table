import React from 'react';
import SortArrows from '../SortArrows/SortArrows';

function ChartHeader(props) {
  return (
    <tr>
      <th width='16%'>
        Title
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='title'
          property2='year'
          type='text'
        />
      </th>
      <th width='6%'>
        Release Year
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='year'
          property2='title'
          type='number'
        />
      </th>
      <th width='12%'>
        Director
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='director'
          property2='title'
          type='text'
        />
      </th>
      <th width='2%'>
        IMDB Rating/10
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='imdbScore'
          property2='title'
          type='number'
        />
      </th>
      <th width='8%'>
        Subgenre
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='subgenre'
          property2='title'
          type='text'
        />
      </th>
      <th width='20%'>Lead Actor(s)</th>
      <th width='45%'>Plot Summary</th>
      <th width='2%'>
        Runtime (minutes)
        <SortArrows
          movies={props.movies}
          setMovies={props.setMovies}
          property='runtime'
          property2='title'
          type='number'
        />
      </th>
    </tr>
  );
}

export default ChartHeader;
