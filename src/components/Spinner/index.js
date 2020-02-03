import React, { memo } from 'react';

const Spinner = ({ loading, children }) => (
  <>
    {loading && <h2>Loading...</h2>}
    {!loading && children}
  </>
);

export default memo(Spinner);
