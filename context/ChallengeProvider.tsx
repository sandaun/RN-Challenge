import React, {useState} from 'react';
import { AppContext, ContextData } from '../ts/interfaces';

export const ChallengeContext = React.createContext<AppContext<ContextData>>({});

export type Props = {
  children: React.ReactNode;
};

const ChallengeProvider: React.FC<Props> = props => {
  // const [contextData, setContextData] = useState<ContextData>((prevContext: ContextData): ContextData => {
    const [contextData, setContextData] = useState<ContextData>((): ContextData => {
    return {
      // ...prevContext,
      Notifications: [],
      Documents: [],
      Attachments: [],
      Contributors: [],
      filterBy: ''
    };
  });

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