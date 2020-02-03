import React from 'react';
import Joke from '../Joke';

const JokeDetail = ({ joke, onBack }) => (
  <>
    <Joke {...joke} isDetail />
    <div className="btn-back" onClick={() => onBack && onBack()}>
      Back to list
    </div>
  </>
);

export default JokeDetail;
