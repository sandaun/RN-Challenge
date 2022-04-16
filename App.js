import React from 'react';

import ChallengeProvider from './context/ChallengeProvider';
import Main from './screens/Main';

const App = () => {
  return (
    <ChallengeProvider>
      <Main />
    </ChallengeProvider>
  );
};

export default App;
