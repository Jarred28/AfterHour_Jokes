import React, { useState, useEffect } from 'react';
import Joke from '../Joke';
import _ from 'lodash';
import { fetchJokeList } from '../../lib/api';
import Spinner from '../Spinner';

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJokes = () => {
    setLoading(true);
    fetchJokeList().then(resp => {
      if (_.isArray(resp)) {
        setJokes(resp.slice(0, 5));
      } else {
        resp.type === 'error' && alert(resp.message);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="card-wrapper">
      {!loading && (
        <>
          <ul>
            {jokes.map(joke => (
              <Joke key={joke.id} {...joke} />
            ))}
          </ul>
          <div className="btn-refresh" onClick={fetchJokes}>Another 5 jokes</div>
        </>
      )}
      {loading && <Spinner />}
    </div>
  );
};

export default JokeList;  
