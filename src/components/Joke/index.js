import React, { memo } from 'react';

// Hou comment: formatted the code for readability
const Joke = ({ id, type, setup, punchline, isDetail, onSelect }) => (
  <li
    className="joke"
    onClick={() => onSelect && onSelect({ id, type, setup, punchline })}
  >
    {isDetail && (
      <>
        <h2>ID: {id}</h2>
        <h2>Type: {type}</h2>
      </>
    )}
    <h2>{setup}</h2>
    <h2>{punchline}</h2>
  </li>
);

// Hou comment: nice job using React.memo to avoid useless rendering!
export default memo(Joke);
