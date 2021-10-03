import { hot } from 'react-hot-loader/root';
import React from 'react';

const App = () => {
  const message = 'React App';
  return (
    <div className="app">
      <h1>{message}</h1>
    </div>
  );
};
export default hot(App);
