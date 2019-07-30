let _ = require('lodash');

function handleSearchClick(id, searchType) {
  clearSearchClasses();
  if (searchType === id) {
    searchType = 'all';
  } else {
    searchType = id;
    document.getElementById(id).classList.add('clickedSearchOption');
  }
  document.getElementById('searchBar').placeholder = 'Search by ' + searchType;
  return searchType;
}

function clearSearchClasses() {
  const elems = document.getElementsByClassName('searchOption');

  _.forEach(elems, elem => {
    elem.classList.remove('clickedSearchOption');
  });
}

export { handleSearchClick, clearSearchClasses };
