import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SortArrows from './SortArrows';

describe('SortArrows', () => {
  afterEach(cleanup);

  let MOCK_MOVIES = [
    {
      title: 'b',
      year: '2'
    },
    {
      title: 'a',
      year: '1'
    }
  ];
  const MOCK_SETMOVIES = movies => (MOCK_MOVIES = movies);

  const { container, getByAltText } = render(
    <SortArrows
      movies={MOCK_MOVIES}
      setMovies={MOCK_SETMOVIES}
      property='title'
      property2='year'
    />
  );

  it('should render as expected', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it.skip('should call sortMovies with "asc" on down arrow click', () => {
    var sortMovies = require('../utils/sortMovies');
    sortMovies = jest.fn();

    fireEvent(getByAltText('Up'), new MouseEvent('click'));

    expect(sortMovies).toHaveBeenCalled();
  });
});
