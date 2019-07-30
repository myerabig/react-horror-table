import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { handleSearchClick, clearSearchClasses } from './searchFuncs';

describe('searchFuncs', () => {
  beforeEach(() => {
    render(
      <div>
        <input id='searchBar' type='text' placeholder='Before Test' />
        <button id='year' className='searchOption' />
        <button id='title' className='searchOption' />
      </div>
    );
  });

  afterEach(cleanup);

  describe('handleSearchClick', () => {
    it('should return "all" if called with identical parameters', () => {
      let result = handleSearchClick('title', 'title');
      expect(result).toEqual('all');
      expect(document.getElementById('searchBar').placeholder).toEqual(
        'Search by all'
      );
    });
    it('should return first parameter when parameters are different', () => {
      let result = handleSearchClick('year', 'title');
      expect(result).toEqual('year');
      expect(document.getElementById('searchBar').placeholder).toEqual(
        'Search by year'
      );
      expect(document.getElementById('year').classList).toContain(
        'clickedSearchOption'
      );
    });
  });
  describe('clearSearchClasses', () => {
    it('should remove the class "clickedSearchOption" from all search options', () => {
      document.getElementById('year').classList.add('clickedSearchOption');
      document.getElementById('title').classList.add('clickedSearchOption');
      clearSearchClasses();
      expect(document.getElementById('year').classList).not.toContain(
        'clickedSearchOption'
      );
      expect(document.getElementById('title').classList).not.toContain(
        'clickedSearchOption'
      );
    });
  });
});
