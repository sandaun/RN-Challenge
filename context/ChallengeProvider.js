import React, {useState} from 'react';

export const ChallengeContext = React.createContext({});

const ChallengeProvider = props => {
  const [contextData, setContextData] = useState([]);

  return (
    <ChallengeContext.Provider
      value={{
        contextData,
        setContextData,
      }}>
      {props.children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
