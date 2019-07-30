import React from 'react';
import sortMovies from '../utils/sortMovies';

function SortArrows(props) {
  return (
    <div className='SortArrows'>
      <div align='right'>
        <img
          className='icon'
          id='upArrow'
          src={require('../../assets/uparrow.png')}
          width='20'
          alt='Up'
          onClick={() =>
            sortMovies(
              props.movies,
              props.setMovies,
              'desc',
              props.property,
              props.property2
            )
          }
        />
        <img
          className='icon'
          id='downArrow'
          src={require('../../assets/downarrow.png')}
          width='20'
          alt='Down'
          onClick={() =>
            sortMovies(
              props.movies,
              props.setMovies,
              'asc',
              props.property,
              props.property2
            )
          }
        />
      </div>
    </div>
  );
}

export default SortArrows;
