import React from 'react';
import Card from './src/components';
import users from './assets/data/users';

const App = () => {
  return (
    <>
      <Card user={users[2]} />
    </>
  );
};

export default App;
