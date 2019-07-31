import React from 'react';
import { getIndexes } from '../utils/getIndexes';
var _ = require('lodash');

function HighlightedResults(props) {
  let indexes = getIndexes(
    props.searching.search,
    props.searching.type,
    props.movie
  );
  let results = [];

  if (props.searching.type !== 'actor') {
    results.push(props.item.slice(0, indexes[0]));

    for (let index = 0; index < indexes.length; index++) {
      results.push(props.searching.search);
      results.push(
        props.item.slice(
          indexes[index] + props.searching.search.length,
          indexes[index + 1]
        )
      );
    }

    return (
      <div className='HighlightedResults'>
        {results.map(chars =>
          chars === props.searching.search ? (
            <span className='searchResult'>{chars}</span>
          ) : (
            <span>{chars}</span>
          )
        )}
      </div>
    );
  } else {
    let results = {};
    let actors = props.item.map(actor => _.trim(actor.toLowerCase()));

    actors.forEach(actor => {
      results[actor] = [];

      if (indexes[actor].length >= 1) {
        results[actor].push(actor.slice(0, indexes[actor][0]));

        for (let index = 0; index < indexes[actor].length; index++) {
          results[actor].push(props.searching.search);
          results[actor].push(
            actor.slice(
              indexes[actor][index] + props.searching.search.length,
              indexes[actor][index + 1]
            )
          );
        }
      }
    });

    return (
      <div className='HighlightedResults'>
        {Object.keys(results).map(result => (
          <div>
            {results[result].map(chars =>
              chars === props.searching.search ? (
                <span className='searchResult'>{chars}</span>
              ) : (
                <span>{chars}</span>
              )
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default HighlightedResults;
