import React, { useState, useEffect } from 'react';
import Joke from '../Joke';
import _ from 'lodash';
import { fetchJokeList } from '../../lib/api';
import Spinner from '../Spinner';
import JokeDetail from '../JokeDetail';

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [selectedJoke, selectJoke] = useState(null);

  const fetchJokes = () => {
    toggleLoading(true);
    fetchJokeList().then(resp => {
      if (_.isArray(resp)) {
        setJokes(resp.slice(0, 5));
      } else {
        resp.type === 'error' && alert(resp.message);
      }
      toggleLoading(false);
    });
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const backToList = () => {
    selectJoke(null);
  };

  return (
    <div className="card-wrapper">
      <Spinner loading={loading}>
        {!selectedJoke && (
          <>
            <ul>
              {jokes.map(joke => (
                <Joke onSelect={selectJoke} key={joke.id} {...joke} />
              ))}
            </ul>
            <div className="btn-refresh" onClick={fetchJokes}>Another 5 jokes</div>
          </>
        )}
        {selectedJoke && (
          <JokeDetail joke={selectedJoke} onBack={backToList} />
        )}
      </Spinner>
    </div>
  );
};

export default JokeList;  
