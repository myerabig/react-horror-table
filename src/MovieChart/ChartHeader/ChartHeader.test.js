import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ChartHeader from './ChartHeader';

describe('ChartHeader', () => {
  afterEach(cleanup);

  let MOCK_MOVIES = [
    {
      title: 'a',
      year: '1'
    }
  ];
  const MOCK_SETMOVIES = movies => (MOCK_MOVIES = movies);

  it('should render as expected', () => {
    const { container } = render(
      <ChartHeader movies={MOCK_MOVIES} setMovies={MOCK_SETMOVIES} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
