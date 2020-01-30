import React, { memo } from 'react';

const Joke = ({ setup, punchline }) => (
  <li className="joke">
    <h2>{setup}</h2>
    <h2>{punchline}</h2>
  </li>
);

export default memo(Joke);
