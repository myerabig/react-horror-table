import sortMovies from './sortMovies';

describe('sortMovies', () => {
  let MOCK_MOVIES = [
    {
      title: 'c',
      year: '1'
    },
    {
      title: 'a',
      year: '3'
    },
    {
      title: 'a',
      year: '2'
    },
    {
      title: 'b',
      year: '2'
    }
  ];

  const MOCK_SETMOVIES = movies => {
    MOCK_MOVIES = movies;
  };

  it('should work in ascending order', () => {
    sortMovies(MOCK_MOVIES, MOCK_SETMOVIES, 'asc', 'title', 'year');

    expect(MOCK_MOVIES).toEqual([
      {
        title: 'a',
        year: '2'
      },
      {
        title: 'a',
        year: '3'
      },
      {
        title: 'b',
        year: '2'
      },
      {
        title: 'c',
        year: '1'
      }
    ]);
  });
  it('should work in descending order', () => {
    sortMovies(MOCK_MOVIES, MOCK_SETMOVIES, 'desc', 'title', 'year');

    expect(MOCK_MOVIES).toEqual([
      {
        title: 'c',
        year: '1'
      },
      {
        title: 'b',
        year: '2'
      },
      {
        title: 'a',
        year: '3'
      },
      {
        title: 'a',
        year: '2'
      }
    ]);
  });
});
